// import {
//     CopilotRuntime,
//     OpenAIAdapter,
//     copilotRuntimeNextJSAppRouterEndpoint,
//   } from '@copilotkit/runtime';
//   import OpenAI from 'openai';
//   import { NextRequest } from 'next/server';

//   // Initialize OpenAI with your API key
//   const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

//   // Create an OpenAIAdapter, specifying the model you want to use (GPT-3.5)
//   const serviceAdapter = new OpenAIAdapter({
//     openai,
//     model: 'gpt-3.5-turbo' // Specify GPT-3.5 model
//   });

//   // Create a Copilot runtime
//   const runtime = new CopilotRuntime();

//   export const POST = async (req: NextRequest) => {
//     // Handle the request using the CopilotKit endpoint
//     const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
//       runtime,
//       serviceAdapter,
//       endpoint: '/api/copilotkit',
//     });

//     return handleRequest(req);
//   };

import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { AzureOpenAI } from "openai";
import { NextRequest } from "next/server";
import "@azure/openai/types";

const openai = new AzureOpenAI({
  endpoint: process.env.AZURE_OPENAI_ENDPOINT,
  apiKey: process.env.AZURE_OPENAI_API_KEY,
  apiVersion: process.env.OPENAI_API_VERSION,
  deployment: process.env.AZURE_OPENAI_DEPLOYMENT_NAME,
});

const serviceAdapter = new OpenAIAdapter({ openai, model: "gpt-35-turbo" });
const runtime = new CopilotRuntime();

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};
