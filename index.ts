import logger from "@schedulino/lambda-logger";

let lambdaFunctionHandler: AWSLambda.Handler = (event: any, context: AWSLambda.Context, callback: AWSLambda.Callback): void => {
	logger.debug("Implement your lambda logic here", event);
};

// "index.handler" as the handler in AWS Lambda Function configuration.
export let handler = lambdaFunctionHandler;
