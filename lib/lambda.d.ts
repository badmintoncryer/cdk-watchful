import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { IWatchful } from './api';
export interface WatchLambdaFunctionOptions {
    /**
     * Number of allowed errors per minute. If there are more errors than that, an alarm will trigger.
     *
     * @default 0
     */
    readonly errorsPerMinuteThreshold?: number;
    /**
     * Number of allowed throttles per minute.
     *
     * @default 0
     */
    readonly throttlesPerMinuteThreshold?: number;
    /**
     * Threshold for the duration alarm as percentage of the function's timeout
     * value.
     *
     * If this is set to 50%, the alarm will be set when p99 latency of the
     * function exceeds 50% of the function's timeout setting.
     *
     * @default 80
     */
    readonly durationThresholdPercent?: number;
    /**
     * Number of periods to evaluate for the alarms.
     *
     * @default 3
     */
    readonly evaluationPeriods?: number;
}
export interface WatchLambdaFunctionProps extends WatchLambdaFunctionOptions {
    readonly title: string;
    readonly watchful: IWatchful;
    readonly fn: lambda.Function;
}
export declare class WatchLambdaFunction extends Construct {
    private readonly watchful;
    private readonly fn;
    private readonly metrics;
    constructor(scope: Construct, id: string, props: WatchLambdaFunctionProps);
    private createErrorsMonitor;
    private createThrottlesMonitor;
    private createDurationMonitor;
}
