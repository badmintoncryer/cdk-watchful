import * as ecs from 'aws-cdk-lib/aws-ecs';
import { ApplicationTargetGroup } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';
import { IWatchful } from './api';
export interface WatchEcsServiceOptions {
    /**
       * Threshold for the Cpu Maximum utilization
       *
       * @default 80
       */
    readonly cpuMaximumThresholdPercent?: number;
    /**
     * Threshold for the Memory Maximum utilization.
     *
     * @default - 0.
     */
    readonly memoryMaximumThresholdPercent?: number;
    /**
     * Threshold for the Target Response Time.
     *
     * @default - 0.
     */
    readonly targetResponseTimeThreshold?: number;
    /**
     * Threshold for the Number of Requests.
     *
     * @default - 0.
     */
    readonly requestsThreshold?: number;
    /**
     * Threshold for the Number of Request Errors.
     *
     * @default - 0.
     */
    readonly requestsErrorRateThreshold?: number;
}
export interface WatchEcsServiceProps extends WatchEcsServiceOptions {
    readonly title: string;
    readonly watchful: IWatchful;
    readonly fargateService?: ecs.FargateService;
    readonly ec2Service?: ecs.Ec2Service;
    readonly targetGroup: ApplicationTargetGroup;
}
export declare class WatchEcsService extends Construct {
    private readonly watchful;
    private readonly ecsService;
    private readonly targetGroup;
    private readonly serviceName;
    private readonly clusterName;
    private readonly targetGroupName;
    private readonly loadBalancerName;
    private readonly metrics;
    constructor(scope: Construct, id: string, props: WatchEcsServiceProps);
    private createCpuUtilizationMonitor;
    private createMemoryUtilizationMonitor;
    private createTargetResponseTimeMonitor;
    private createRequestsMonitor;
    private createHttpRequestsMetrics;
    private createHostCountMetrics;
    private requestsErrorRate;
}
