# Vibe Coding：PM Plan mode vs R&D Direct Write

在我们团队开发流程一直是个瓶颈，PM 写 PRD 堆发 review 上线，产出质量不如直接由研发让 AI 写，上下游还增加了不必要的沟通成本。

第一次尝试 PM 在 Claude Code 的 Plan mode 下写需求，生成的代码能用，但有几个问题。缺乏业务上下文，PM 在 Plan mode 下只能描述想要什么功能，但不知道为什么需要这个功能、这个功能的约束条件。缺少迭代机制，Plan mode 一次性生成 PRD，没有中间的反馈和调整过程。上下文消耗大，一次性把整个项目的背景都放进来了，导致后续 Code Review 上下文不足。

然后试了另一种模式，PM 直接用 Claude Code 的写代码模式，让 Claude 基于业务理解和过往经验直接写代码。效果明显好了很多。代码质量更高，Claude 能理解团队的技术栈和 coding 规范，生成的代码更符合实际情况。迭代更灵活，可以分批次写代码，每批写完就 review，发现问题及时调整。上下文更聚焦，每次只写一个模块，上下文在可控范围内。

PM Plan mode 需求描述是抽象描述，R&D Direct Write 是业务理解。PM Plan mode 代码生成是一次性生成，R&D Direct Write 是分批次生成。PM Plan mode 上下文利用低，R&D Direct Write 上下文利用高。PM Plan mode 代码质量一般，R&D Direct Write 代码质量较高。PM Plan mode 迭代灵活性低，R&D Direct Write 迭代灵活性高。PM Plan mode 适合简单功能，R&D Direct Write 适合复杂模块。

PM 在 Plan mode 下最大的问题是无法把为什么要这样做传递给 AI，缺少对技术实现细节的理解。R&D Direct Write 模式下最大的优势是 PM 可以用自然的语言和 Claude 沟通，Claude 能基于对话历史逐步理解业务，遇到问题时可以当场讨论和调整。

对于 PM 不要过度依赖 Plan mode。Plan mode 适合梳理思路不适合写需求，改用直接对话的方式和 Claude 交流需求。分阶段提供信息，第一阶段业务背景用户痛点目标，第二阶段功能列表优先级，第三阶段约束条件技术细节。建立对话历史，Claude Code 会记住之前的对话，这比一次性 PRD 有价值得多。

对于研发不要盲目相信生成的代码。AI 生成的代码可能有 bug，也可能不符合团队规范，认真 review 不要因为是 AI 生成就放松警惕。保持技术判断权，如果生成的代码架构不合理，要敢于推翻。要让 AI 解释为什么这样设计，不要只是照做。利用 AI 的教育价值，代码 review 时，问 Claude 为什么这里用这个模式而不是那个，这比自己闷头研究可能更快。

Vibe Coding 的 PM Plan mode vs R&D Direct Write，本质上是抽象需求 vs 具体实现、一次性输出 vs 分批迭代、PM 想要什么 vs R&D 要怎么做到。PM 要成为业务理解者和技术把关者。不要让 Plan mode 限制了 Claude 的发挥空间。给 R&D 充分的信息，让他们基于业务判断写出更好的代码。编程工具只是放大器。
