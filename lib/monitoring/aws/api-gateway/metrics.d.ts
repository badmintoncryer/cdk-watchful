import { Metric } from 'aws-cdk-lib/aws-cloudwatch';
import { WatchedOperation } from '../../../api-gateway';
declare const enum Metrics {
    FourHundredError = "4XXError",
    FiveHundredError = "5XXError",
    CacheHitCount = "CacheHitCount",
    CacheMissCount = "CacheMissCount",
    Count = "Count",
    IntegrationLatency = "IntegrationLatency",
    Latency = "Latency"
}
export declare class ApiGatewayMetricFactory {
    metricErrors(apiName: string, stage: string, op?: WatchedOperation): {
        count4XX: Metric;
        count5XX: Metric;
    };
    metricCache(apiName: string, stage: string, op?: WatchedOperation): {
        hits: Metric;
        misses: Metric;
    };
    metricCalls(apiName: string, stage: string, op?: WatchedOperation): Metric;
    metricIntegrationLatency(apiName: string, stage: string, op?: WatchedOperation): {
        min: Metric;
        avg: Metric;
        p90: Metric;
        p95: Metric;
        p99: Metric;
        max: Metric;
    };
    metricLatency(apiName: string, stage: string, op?: WatchedOperation): {
        min: Metric;
        avg: Metric;
        p90: Metric;
        p95: Metric;
        p99: Metric;
        max: Metric;
    };
    protected metric(metricName: Metrics, apiName: string, stage: string, op?: WatchedOperation): Metric;
}
export {};
