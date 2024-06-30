---
title: OpenAPI
group: Concepts
order: 5
---

# OpenAPI

AiPMChat's plugin mechanism supports the OpenAPI specification, which is a standard for defining and describing RESTful APIs. By using OpenAPI, developers can create a clear, language-agnostic API description to facilitate the correct implementation and usage of the API. Here is an overview of AiPMChat's support for OpenAPI:

## AiPMChat Plugin Compatibility

AiPMChat's plugin system is fully compatible with OpenAPI documents. This means that when you create a AiPMChat plugin, you only need to follow the following steps to convert an OpenAPI service into a session plugin:

1. **Build the API** - Develop your service API, ensuring that it can handle requests from AiPMChat and return appropriate responses.
2. **OpenAPI Document** - Use the OpenAPI specification (in YAML or JSON format) to describe your API. This document should provide detailed information about the endpoints, parameters, response formats, etc., of your API.
3. **Create a Plugin Manifest** - Create a `manifest.json` plugin manifest file for AiPMChat, which includes the plugin's metadata, such as the plugin's name, description, and most importantly, fill in the URL of your OpenAPI document in the `openapi` field.

## OpenAPI Specification

The OpenAPI specification is a standard for describing the structure and behavior of RESTful APIs. This specification allows developers to define the following:

- Basic information about the API (such as title, description, and version)
- URL of the API server
- Available endpoints (paths) and operations (e.g., GET, POST, PUT, DELETE)
- Input and output parameters for each operation
- Authentication methods (e.g., no authentication, HTTP basic authentication, OAuth2)
- Common response messages and error codes

You can view an example of an OpenAPI document for the [Weather Plugin](https://github.com/steven-tey/weathergpt) here: [openapi.json](https://weathergpt.vercel.app/openapi.json).

For a detailed introduction to OpenAPI, you can refer to the [OpenAPI Specification](https://swagger.io/specification/).

## Integrating OpenAPI with AiPMChat

Once your API and plugin manifest file are ready, you can integrate them with AiPMChat. In the AiPMChat UI, users can install your plugin and interact with your service through the endpoints defined in the OpenAPI document. Your OpenAPI document will guide AiPMChat on how to communicate with your API, ensuring the correct interpretation and handling of requests and responses.

For example, the AskYourPDF plugin:

We strive to achieve integration with OpenAPI in AiPMChat's plugin mechanism to ensure that your service can seamlessly integrate with AiPMChat, providing a rich user experience. By following the OpenAPI specification, you can ensure that your API documentation is accurate, consistent, and easy to use.
