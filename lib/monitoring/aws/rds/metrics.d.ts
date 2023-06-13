import { Metric } from 'aws-cdk-lib/aws-cloudwatch';
declare const enum Metrics {
    SelectThroughput = "SelectThroughput",
    InsertThroughput = "InsertThroughput",
    UpdateThroughput = "UpdateThroughput",
    DeleteThroughput = "DeleteThroughput",
    BufferCacheHitRatio = "BufferCacheHitRatio",
    DatabaseConnections = "DatabaseConnections",
    AuroraReplicaLag = "AuroraReplicaLag",
    CPUUtilization = "CPUUtilization"
}
/**
 * Metrics for RDS Aurora.
 */
export declare class RdsAuroraMetricFactory {
    metricDmlThroughput(clusterIdentifier: string): {
        dbInsertThroughputMetric: Metric;
        dbUpdateThroughputMetric: Metric;
        dbSelectThroughputMetric: Metric;
        dbDeleteThroughputMetric: Metric;
    };
    metricBufferCacheHitRatio(clusterIdentifier: string): Metric;
    metricDbConnections(clusterIdentifier: string): Metric;
    metricReplicaLag(clusterIdentifier: string): Metric;
    metricCpuUtilization(clusterIdentifier: string): Metric;
    protected metric(metric: Metrics, clusterIdentifier: string): Metric;
}
export {};
