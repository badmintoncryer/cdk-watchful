import { Metric } from 'aws-cdk-lib/aws-cloudwatch';
declare const enum Metrics {
    ConsumedReadCapacityUnits = "ConsumedReadCapacityUnits",
    ConsumedWriteCapacityUnits = "ConsumedWriteCapacityUnits"
}
export declare class DynamoDbMetricFactory {
    metricConsumedCapacityUnits(tableName: string): {
        read: Metric;
        write: Metric;
    };
    protected metric(metric: Metrics, tableName: string): Metric;
}
export {};
