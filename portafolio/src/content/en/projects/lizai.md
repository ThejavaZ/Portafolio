---
title: "Liz-AI - Personal AI Assistant for Linux"
image: "../../../assets/projects/liz-ai.png"
description: "Modular AI assistant for the terminal with multi-provider support, secure tool execution and a solid test suite."
frameworks:
  [
    "Python",
    "Gemini API",
    "OpenAI API",
    "Anthropic Claude",
    "DeepSeek",
    "Docker",
    "Pytest",
  ]
type: "AI CLI & Tooling"
order: 3
status: "en-desarrollo"
url_production: ""
url_repo: "https://github.com/ThejavaZ/Liz-AI"
urls: ["https://github.com/ThejavaZ/Liz-AI"]
---

**Liz-AI** is a smart personal assistant designed specifically for Linux environments, focused on streamlining development workflows, system tasks and direct terminal interaction, with a strict commitment to modularity and security.

### Architecture and Capabilities

- **Multi-provider LLM support:** switch dynamically between **Google Gemini, OpenAI, Anthropic Claude and DeepSeek** through a decoupled, provider-factory based interface.
- **Tool calling with built-in security:** lets the agent interact safely with the operating system (filesystem, Git, terminal commands) through an intermediate permission layer (`PermissionLayer` with ALLOW/DENY/ASK control).
- **Custom CLI environment:** fast in-terminal commands (`/help`, `/tools`, `/clear`, `/status`) for session and history control.
- **Quality and reliability:** backed by more than **121 automated tests** with `pytest`, covering everything from AI provider integration to the behavior of the command execution engines.
