import { Metric } from 'aws-cdk-lib/aws-cloudwatch';
declare const enum Metrics {
    ExecutionsStarted = "ExecutionsStarted",
    ExecutionsSucceeded = "ExecutionsSucceeded",
    ExecutionsFailed = "ExecutionsFailed",
    ExecutionsAborted = "ExecutionsAborted",
    ExecutionThrottled = "ExecutionThrottled",
    ExecutionsTimedOut = "ExecutionsTimedOut"
}
export declare class StateMachineMetricFactory {
    metricExecutions(stateMachineArn: string): {
        total: Metric;
        succeeded: Metric;
        failed: Metric;
        aborted: Metric;
        throttled: Metric;
        timedOut: Metric;
    };
    protected metric(metric: Metrics, stateMachineArn: string): Metric;
}
export {};
