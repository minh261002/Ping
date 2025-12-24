import {openai} from "@ai-sdk/openai";
import {Agent} from "@convex-dev/agent";
import {components} from "../../_generated/api";

export const supportAgent = new Agent(components.agent,{
    languageModel: openai.chat("gpt-4o-mini"),
    instructions: "You are a customer support assistant.",
    name: "Support Agent",
})