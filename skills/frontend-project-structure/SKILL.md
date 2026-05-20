---
name: frontend-project-structure
description: 约束前端项目（Next.js、Nuxt、SvelteKit 等任何有 app/ 路由层的框架）的全局目录结构规范。当用户要求新建页面、组件、hooks、类型定义、工具函数、状态管理、常量配置，或询问"这个文件放哪"时触发。核心管控：所有代码归入正确的全局目录（/components、/types、/hooks、/lib、/constants、/stores），禁止在路由入口文件中内联逻辑，禁止使用局部 _components 目录，禁止类型散落在各路由文件内。适用于任何涉及新建或修改 .tsx/.ts/.vue/.svelte 文件的任务，必须使用此 skill。
allowed-tools: Bash(find . -type f -name "*.tsx" -o -name "*.ts" | grep -v node_modules), Bash(wc -l), Bash(cat package.json), Bash(npx biome check .), Bash(npx biome check --write .), Bash(npx eslint .), Bash(npx prettier --check .)
---

# 前端项目目录结构规范

## 核心原则

1. **全局优先**：类型、hooks、组件、工具函数一律放全局目录，不允许散落在路由文件夹内
2. **路由入口文件是组装层**：负责把数据、布局、组件拼在一起，不是越空越好
3. **按领域分类**：全局目录内部再按业务领域建子目录，不允许所有文件平铺在一层
4. **代码质量检查**：优先使用项目已有的 lint/format 工具；若项目未配置则可选引入 Biome

---

## 标准项目目录

```
project-root/
├── app/  （或 pages/、src/routes/ 等，视框架而定）
│   ├── (marketing)/
│   │   └── page.tsx        # 路由入口，只做组装
│   ├── doc/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   └── layout.tsx
│
├── components/             # 所有组件，按领域分子目录
│   ├── ui/                 # 原子级通用组件（Button, Badge, Input...）
│   ├── layout/             # 布局组件（Header, Footer, Sidebar...）
│   ├── doc/                # 文档页专用组件
│   ├── marketing/          # 营销页专用组件
│   └── shared/             # 跨领域共享组件
│
├── types/                  # 所有类型定义，按领域分文件
├── hooks/                  # 所有 custom hooks
├── lib/                    # 工具函数、第三方封装
├── constants/              # 静态配置、枚举值、导航数据等
└── stores/                 # 状态管理（zustand / jotai / pinia 等）
```

---

## 规则一：路由入口文件（page.tsx）的职责

### 正确理解"组装层"

路由入口文件的职责是**把数据、布局、组件拼在一起**。它本身就是合法的组装层，有内容是正常的，不是越空越好。

**不要为了"符合规范"机械拆分**——把 50 行的页面 JSX 单独抽成一个 `XxxContent` 组件，只是把代码搬了个地方，什么问题都没解决，反而增加了跳转层级。

### 什么时候才应该从入口文件提取组件？

必须满足以下至少一条，否则不应拆：

- **会被复用**：该 JSX 块在 2 个以上页面使用
- **需要独立状态**：该部分需要 `useState` / `useEffect`，必须变成 Client Component
- **足够复杂**：该 JSX 块本身超过 80 行，且有清晰的独立语义

**"文件超过 80 行"本身不构成拆分理由**。先问：有没有真正可以独立的部分？有就提取，没有就保持原样。

### 禁止写在入口文件的内容

这些才是真正需要移走的：

| 禁止                      | 应放在哪               |
| ------------------------- | ---------------------- |
| `type` / `interface` 定义 | `/types/<领域>.ts`     |
| 静态数据数组（> 3 项）    | `/constants/<名称>.ts` |
| 业务逻辑函数              | `/lib/` 或 `/hooks/`   |
| 有复用价值的子组件        | `/components/<领域>/`  |
| 直接裸写 `fetch()` 调用   | `/lib/` 中封装后调用   |

### 代码示例

```tsx
// ✅ 正确——有结构、有内容，但职责清晰
import { DocSidebar } from '@/components/doc/DocSidebar'
import { getDocData } from '@/lib/doc'
import type { DocPageProps } from '@/types/doc'

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocData(params.slug)
  return (
    <div className="flex gap-8">
      <DocSidebar />
      <article>
        <h1>{doc.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: doc.html }} />
      </article>
    </div>
  )
}
// 这个页面有内联 JSX，没有问题——article 部分只在这里用，也没有复杂逻辑，不需要拆
```

```tsx
// ❌ 错误——把完全不需要拆的内容强行抽走
import { DocContent } from '@/components/doc/DocContent' // 只在这一个页面用，没有状态，50行以内
// DocContent 的存在没有任何意义，只是搬了个地方
```

```tsx
// ❌ 错误——类型、静态数据、多组件塞进入口文件
type NavItem = { id: string; title: string }
const NAV_ITEMS: NavItem[] = [{ id: 'a', title: 'A' }, ...]  // 应去 /constants
function Sidebar() { ... }  // 应去 /components
export default function DocPage() { ... }
```

---

## 规则二：组件分类与拆分

**禁止使用 `_components/` 局部目录**，所有组件进 `/components/<领域>/`，禁止平铺在根层。

| 子目录       | 放什么                             | 判断标准                         |
| ------------ | ---------------------------------- | -------------------------------- |
| `ui/`        | Button, Badge, Input, Modal...     | 完全无业务逻辑，只接受通用 props |
| `layout/`    | Header, Footer, Sidebar, Container | 负责页面整体骨架                 |
| `doc/`       | DocContent, DocSidebar, CodeBlock  | 只在文档类页面使用               |
| `marketing/` | Hero, PricingCard, CTA             | 只在营销/落地页使用              |
| `shared/`    | SearchBar, UserAvatar              | 跨多个业务领域使用               |

出现新业务（如 `/app/blog`）→ 新建 `components/blog/`，不要往 `shared/` 里堆。

**组件文件拆分触发条件**（同样要有实质理由，不要为拆而拆）：
- 单文件 > 150 行
- 一个文件内定义了多个有独立语义的组件
- 某个 JSX 区块会被其他地方复用

**Server vs Client**：默认 Server Component；只有用到 `useState`、`useEffect`、事件处理、浏览器 API 时才加 `'use client'`，且尽量下推到叶子节点。

---

## 规则三：类型、Hooks、常量的归属

### /types — 类型定义

- 所有 `interface` / `type` 必须放 `/types/<领域>.ts`，按业务领域分文件，不堆进 `index.ts`
- 简单 props 类型可留在组件文件内，满足任一条件须提取：被 2+ 文件引用 / 含 5+ 字段 / 是业务实体

### /hooks — Custom Hooks

- 所有 `use` 开头的 hook 必须放 `/hooks/`，一个 hook 一个文件
- 提取为 hook 的条件：逻辑 > 15 行 / 多组件复用 / 含 `useEffect` + 状态管理

### /constants — 静态数据与配置

- 静态数组 > 10 条 → `/constants/`；全局配置 → `config.ts`；导航数据 → `nav.ts`

### /lib — 工具函数与第三方封装

- 纯函数工具 → `utils.ts`；数据获取封装 → `fetcher.ts` 或 `<领域>.ts`；第三方库初始化 → `<库名>.ts`

### /stores — 状态管理

- 每个 store 单独文件，按业务领域命名；可 import `/types`，不能反向依赖组件

---

## 规则四：代码质量检查

**第一步**：确认项目已有哪些工具
```bash
cat package.json | grep -E '"(eslint|biome|prettier|@biomejs)"'
```

**各工具命令**：
```bash
npx eslint . --fix            # ESLint
npx biome check --write .     # Biome 自动修复
npx biome check .             # Biome 确认无 error
npx prettier --write .        # Prettier
```

**Biome 常见报错**：

| 规则                 | 错误                 | 修复                      |
| -------------------- | -------------------- | ------------------------- |
| `useImportType`      | `import { DocItem }` | `import type { DocItem }` |
| `noExplicitAny`      | `data: any`          | `data: unknown`           |
| `noUnusedVariables`  | 未使用的变量         | 删除或加 `_` 前缀         |
| `noUselessFragments` | `<><div/></>`        | `<div/>`                  |

**交付标准**：无 `error` 级报错 + 格式问题已自动修复。若项目无任何 lint 工具，可建议引入 Biome，但不在用户未确认时自行 `npm install`。

---

## 新建文件工作流

1. **判断归属**：组件 / 类型 / hook / 工具函数 / 常量？
2. **找到正确目录**：对照标准目录结构
3. **检查子目录是否存在**，没有就先建
4. **写代码**
5. **运行项目对应的 lint 工具**（先查 `package.json`）
6. **更新路由入口文件**：只 import，不写逻辑（但允许有内联 JSX 结构）

---

## 快速参考

```bash
# 查看项目全局目录结构（2 层）
find . -maxdepth 2 -type d | grep -v node_modules | grep -v .git | sort

# 找出超过 150 行的组件（拆分候选）
find components -name "*.tsx" | xargs wc -l | sort -rn | head -20

# 检查项目已配置的 lint 工具
cat package.json | grep -E '"(eslint|biome|prettier)"'
```
