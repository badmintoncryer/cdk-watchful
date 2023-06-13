import { MathExpression, Metric } from 'aws-cdk-lib/aws-cloudwatch';
declare const enum ApplicationELBMetrics {
    HealthyHostCount = "HealthyHostCount",
    UnHealthyHostCount = "UnHealthyHostCount",
    TARGET_2XX_COUNT = "HTTPCode_Target_2XX_Count",
    TARGET_3XX_COUNT = "HTTPCode_Target_3XX_Count",
    TARGET_4XX_COUNT = "HTTPCode_Target_4XX_Count",
    TARGET_5XX_COUNT = "HTTPCode_Target_5XX_Count",
    TargetResponseTime = "TargetResponseTime",
    RequestCount = "RequestCount"
}
declare const enum EcsMetrics {
    MemoryUtilization = "MemoryUtilization",
    CPUUtilization = "CPUUtilization"
}
export declare class EcsMetricFactory {
    metricCpuUtilizationAverage(clusterName: string, serviceName: string): Metric;
    metricMemoryUtilizationAverage(clusterName: string, serviceName: string): Metric;
    protected ecsMetric(metric: EcsMetrics, clusterName: string, serviceName: string): Metric;
    metricMinHealthyHostCount(targetGroup: string, loadBalancer: string): Metric;
    metricMaxUnhealthyHostCount(targetGroup: string, loadBalancer: string): Metric;
    metricTargetResponseTime(targetGroup: string, loadBalancer: string): {
        min: Metric;
        max: Metric;
        avg: Metric;
    };
    metricRequestCount(targetGroup: string, loadBalancer: string): Metric;
    metricHttpErrorStatusCodeRate(targetGroup: string, loadBalancer: string): MathExpression;
    metricHttpStatusCodeCount(targetGroup: string, loadBalancer: string): {
        count2XX: Metric;
        count3XX: Metric;
        count4XX: Metric;
        count5XX: Metric;
    };
    protected albMetric(metric: ApplicationELBMetrics, targetGroup: string, loadBalancer: string): Metric;
}
export {};
