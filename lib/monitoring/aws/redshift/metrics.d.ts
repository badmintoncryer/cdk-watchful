import { Metric } from 'aws-cdk-lib/aws-cloudwatch';
export declare class RedshiftMetricFactory {
    metricAverageConnectionCount(clusterIdentifier: string): Metric;
    metricAverageDiskSpaceUsageInPercent(clusterIdentifier: string): Metric;
    metricAverageCpuUsageInPercent(clusterIdentifier: string): Metric;
    metricAverageQueryDurationInMicros(clusterIdentifier: string): {
        shortQueries: Metric;
        mediumQueries: Metric;
        longQueries: Metric;
    };
    metricAverageLatencyInSeconds(clusterIdentifier: string): {
        read: Metric;
        write: Metric;
    };
    metricMaintenanceModeEnabled(clusterIdentifier: string): Metric;
    private metricQueryDuration;
    private metric;
}
