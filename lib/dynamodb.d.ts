import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import { IWatchful } from './api';
export interface WatchDynamoTableOptions {
    /**
     * Threshold for read capacity alarm (percentage)
     * @default 80
     */
    readonly readCapacityThresholdPercent?: number;
    /**
     * Threshold for read capacity alarm (percentage)
     * @default 80
     */
    readonly writeCapacityThresholdPercent?: number;
}
export interface WatchDynamoTableProps extends WatchDynamoTableOptions {
    readonly title: string;
    readonly watchful: IWatchful;
    readonly table: dynamodb.Table;
}
export declare class WatchDynamoTable extends Construct {
    private readonly watchful;
    private readonly metrics;
    constructor(scope: Construct, id: string, props: WatchDynamoTableProps);
    /**
     * Create widgets for tables with billingMode=PROVISIONED
     * Include alarms when capacity is over 80% of the provisioned value
     */
    private createWidgetsForProvisionedTable;
    /**
     * Create widgets for tables with billingMode=PAY_PER_REQUEST
     * Include consumed capacity metrics
     */
    private createWidgetsForPayPerRequestTable;
    private createDynamoCapacityGraph;
    private createDynamoPPRGraph;
    private createDynamoCapacityAlarm;
}
