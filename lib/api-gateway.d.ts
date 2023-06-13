import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { IWatchful } from './api';
export interface WatchApiGatewayOptions {
    /**
     * Alarm when 5XX errors reach this threshold over 5 minutes.
     *
     * @default 1 any 5xx HTTP response will trigger the alarm
     */
    readonly serverErrorThreshold?: number;
    /**
     * A list of operations to monitor separately.
     *
     * @default - only API-level monitoring is added.
     */
    readonly watchedOperations?: WatchedOperation[];
    /**
     * Include a dashboard graph for caching metrics
     *
     * @default false
     */
    readonly cacheGraph?: boolean;
}
export interface WatchApiGatewayProps extends WatchApiGatewayOptions {
    /**
     * The title of this section.
     */
    readonly title: string;
    /**
     * The Watchful instance to add widgets into.
     */
    readonly watchful: IWatchful;
    /**
     * The API Gateway REST API that is being watched.
     */
    readonly restApi: apigw.RestApi;
}
export declare class WatchApiGateway extends Construct {
    private readonly api;
    private readonly apiName;
    private readonly stage;
    private readonly watchful;
    private readonly metrics;
    constructor(scope: Construct, id: string, props: WatchApiGatewayProps);
    private createCallGraphWidget;
    private createCacheGraphWidget;
    private createLatencyGraphWidget;
    private createIntegrationLatencyGraphWidget;
}
/**
 * An operation (path and method) worth monitoring.
 */
export interface WatchedOperation {
    /**
     * The HTTP method for the operation (GET, POST, ...)
     */
    readonly httpMethod: string;
    /**
     * The REST API path for this operation (/, /resource/{id}, ...)
     */
    readonly resourcePath: string;
}
