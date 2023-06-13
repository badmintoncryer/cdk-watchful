import { StateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import { IWatchful } from './api';
export interface WatchStateMachineOptions {
    /**
     * Alarm when execution failures reach this threshold over 1 minute.
     *
     * @default 1 any execution failure will trigger the alarm
     */
    readonly metricFailedThreshold?: number;
}
export interface WatchStateMachineProps extends WatchStateMachineOptions {
    readonly title: string;
    readonly watchful: IWatchful;
    readonly stateMachine: StateMachine;
}
export declare class WatchStateMachine extends Construct {
    private readonly title;
    private readonly watchful;
    private readonly stateMachine;
    private readonly metricFailedThreshold;
    private readonly metrics;
    constructor(scope: Construct, id: string, props: WatchStateMachineProps);
    private createExecutionMetrics;
    private createLinks;
}
