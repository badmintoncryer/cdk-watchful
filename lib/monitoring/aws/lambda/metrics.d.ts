import * as cdk from 'aws-cdk-lib';
declare const enum Metrics {
    Invocations = "Invocations",
    Duration = "Duration",
    Errors = "Errors",
    Throttles = "Throttles"
}
export declare class LambdaMetricFactory {
    metricInvocations(functionName: string): cdk.aws_cloudwatch.Metric;
    metricDuration(functionName: string): {
        min: cdk.aws_cloudwatch.Metric;
        avg: cdk.aws_cloudwatch.Metric;
        p50: cdk.aws_cloudwatch.Metric;
        p90: cdk.aws_cloudwatch.Metric;
        p99: cdk.aws_cloudwatch.Metric;
        max: cdk.aws_cloudwatch.Metric;
    };
    metricErrors(functionName: string): cdk.aws_cloudwatch.Metric;
    metricThrottles(functionName: string): cdk.aws_cloudwatch.Metric;
    protected metric(metric: Metrics, functionName: string): cdk.aws_cloudwatch.Metric;
}
export {};
