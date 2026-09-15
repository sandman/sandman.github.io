---
title: "The Harness Is Not the Product"
description: "The harness is where the hard engineering is. Adoption is where the value is. Why the product is the harness plus the path to adoption."
publishDate: 2026-09-14
originalUrl: "https://www.linkedin.com/pulse/harness-product-sandip-gangakhedkar-g81je/"
tags: ["Enterprise AI", "AI adoption", "AI transformation"]
draft: false
---

Harnesses are in vogue. Walk through a recent YC cohort and a striking share of companies describe themselves the same way: a domain-specific harness wrapped around a frontier model. The argument is tidy. Models are converging on capability and price, so they are becoming a commodity input. The scaffolding around the model, the tools, memory, guardrails, evaluation loops and domain context, is where the real engineering lives, and where the value is created for the end user or the firm.

Half of that argument is right. The harness is where the hard engineering is. The term only entered mainstream use in early 2026, and the evidence behind it is real: swapping the harness while holding the model constant can move an agent from average to top-tier, and small teams have shipped very large codebases on the back of a well-designed one.[[1]](#ref-1) Garry Tan's "thin harness, fat skills" framing has become shorthand for a whole generation of startups.[[2]](#ref-2)

But the harness is not the product. There is a layer above it that almost nobody in the harness conversation talks about, and it is the layer where the money actually is.

### The layer above the harness

Call it adoption, or workflow transformation, or organisational change. It is the work of taking a capable system and making it change how a business runs: how revenue is generated, how cost is taken out, how decisions get made and by whom. A harness that sits in a sandbox producing impressive outputs has generated zero business impact. Impact only shows up when someone has redesigned a workflow around it, re-cut roles and responsibilities, rebuilt controls, and convinced a room full of people to work differently.

This is not a soft point. It is the most consistent finding in the enterprise AI literature.

BCG's 10-20-70 rule highlights this: 10% of the effort in a successful AI programme goes to algorithms, 20% to technology and data, and 70% to people and processes.[[3]](#ref-3) Read that against the harness thesis. The harness lives in the 10% and the 20%. The value lives in the 70%. BCG's own framing is that most organisations get the ratio backwards, overinvesting in the tools and underinvesting in the redesign of work that lets the tools matter.[[4]](#ref-4)

McKinsey's 2026 State of AI survey lands in the same place from a different direction. Only 6% of organisations qualify as "AI high performers", attributing just 5% or more of EBIT to AI, and that figure has been flat for a year despite record spending. What separates them is not which tools they use. Nearly three-quarters of high performers have fundamentally redesigned workflows around AI rather than inserting AI into existing ones, compared with roughly a quarter of everyone else.[[5]](#ref-5) Of the twenty-five factors McKinsey tested, workflow redesign had one of the strongest correlations with profit impact.[[6]](#ref-6)

Microsoft's 2026 Work Trend Index puts a number on the same split from the employee side: about two-thirds of AI's realised impact traces to organisational factors, one-third to individual skill and mindset.[[7]](#ref-7) And MIT's widely cited finding that only around 5% of enterprise AI pilots produce measurable P&L impact is the failure-mode version of the same story.[[8]](#ref-8)

### Why founders forget this

The harness is tangible. It is code. It has benchmarks, evals, a demo, a GitHub repo. It fits neatly into a pitch and a procurement spreadsheet. Adoption is none of those things. It is slow, political, specific to each client, and hard to put on a slide. So the industry has conveniently redefined "the product" as the thing that is easiest to build and easiest to show, and left the hard part to the customer.

That is exactly where the learning curve sits. As domain-specific harnesses get built, every firm that buys one discovers the same set of questions the vendor did not answer. Which workflows do we apply this to first? Do we retrofit an existing process, or rebuild it from scratch around what the system can now do? Who owns the output? What does supervision look like when a human is checking exceptions rather than doing the work? What happens to the team whose job just changed? Most of these questions have nothing to do with the model or the harness, and all of them determine whether any value is captured.

### What this means for builders

If the harness is not the product, then the product is the harness plus the path to adoption: the playbook for reimagining the workflow, the change-management processes, the measurement that proves impact to a CFO, and the entrenched tribal-knowledge of how firms in a given domain actually absorb this. That is less glamorous than a clever agent loop, and much harder for a competitor to copy.

It also reframes the commoditisation argument. If models are becoming a commodity, harnesses will follow, and faster than their builders expect. Open harnesses already exist to prevent lock-in.[[2]](#ref-2) What does not commoditise is the knowledge of how to make a specific kind of firm change how it works. That is where the 70% lives, and that is what the winners will own.

The harness is where the hard engineering is. Adoption is where the value is. Confusing the two is how you build something impressive that nobody's P&L ever notices.

### References

<ol class="references">
<li id="ref-1">NxCode, “What Is Harness Engineering? Complete Guide for AI Agent Development” (March 2026). <a href="https://www.nxcode.io/resources/news/what-is-harness-engineering-complete-guide-2026" rel="noopener">nxcode.io</a></li>
<li id="ref-2">Summary of harness-engineering discussion on X, including Garry Tan’s “thin harness, fat skills” and Harrison Chase on open harnesses (April 2026). <a href="https://x.com/i/trending/2043397397812805762" rel="noopener">x.com</a></li>
<li id="ref-3">BCG, “AI” content hub, on the 10-20-70 approach. <a href="https://beyond.bcg.com/home/ai" rel="noopener">beyond.bcg.com</a></li>
<li id="ref-4">BCG, “To Unlock the Full Value of AI, Invest in Your People” (2025). <a href="https://www.bcg.com/publications/2025/to-unlock-the-full-value-of-ai-invest-in-your-people" rel="noopener">bcg.com</a></li>
<li id="ref-5">McKinsey / QuantumBlack, “The State of AI: Global Survey 2026” (August 2026). <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" rel="noopener">mckinsey.com</a></li>
<li id="ref-6">Forbes, “Companies Need To Redesign Around AI, Not Just Adopt It” (April 2026), summarising McKinsey’s factor analysis. <a href="https://www.forbes.com/sites/josipamajic/2026/04/08/companies-need-to-redesign--around-ai-not-just-adopt-it/" rel="noopener">forbes.com</a></li>
<li id="ref-7">Microsoft, 2026 Work Trend Index, as reported in secondary coverage. <a href="https://lovex.dev/blog/mckinsey-ai-redesign-gap" rel="noopener">lovex.dev</a></li>
<li id="ref-8">MIT NANDA, “The GenAI Divide” (2025), the source of the widely cited 5% pilot-success figure.</li>
</ol>
