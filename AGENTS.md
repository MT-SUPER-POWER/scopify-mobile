<!-- BEGIN: cooperation-rule -->
# 项目协作规范

## 1. Git 提交信息规范(必须)

- 每次任务结束后，编写一条规范的 Git 提交信息并用于提交变更；遵循 Conventional Commits。
- 默认执行策略：直接提交本次任务相关改动（`git add` + `git commit`）。仅当用户明确说明"不要提交/稍后提交"时，改为只提供提交建议。
- ⚠️ **子仓库注意**：如果是 git submodule，变更需在对应子仓库内提交，必要时再到主仓库更新子模块引用。
  - 格式：`<type>(<scope>): <subject>`
  - 常用 type：`feat`、`fix`、`docs`、`refactor`、`chore`、`test`、`perf`、`build`。
  - scope 建议：`api`、`web`、`db`、`clip`、`transcode`、`infra`。
  - 主题行不超过 50 个字符，使用祈使句；中文或英文均可，但保持一致。
  - 可选正文（换行后 72 列换行）：说明动机、关键变更点与影响范围。
  - 示例：
    - `feat(clip): 实现直播片段自动切割接口`
    - `fix(web): 修复视频预览组件未释放资源`
    - `docs(readme): 增加本地开发指南`

<!-- END: cooperation-rule  -->
