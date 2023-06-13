import * as rds from 'aws-cdk-lib/aws-rds';
import { Construct } from 'constructs';
import { IWatchful } from './api';
export interface WatchRdsAuroraOptions {
    /**
       * Threshold for the Cpu Maximum utilization
       *
       * @default 80
       */
    readonly cpuMaximumThresholdPercent?: number;
    /**
     * Threshold for the Maximum Db Connections.
     *
     * @default - 0.
     */
    readonly dbConnectionsMaximumThreshold?: number;
    /**
     * Threshold for the Maximum Db ReplicaLag.
     *
     * @default - 0.
     */
    readonly dbReplicaLagMaximumThreshold?: number;
    /**
     * Threshold for the Maximum Db Throughput.
     *
     * @default - 0.
     */
    readonly dbThroughputMaximumThreshold?: number;
    /**
     * Threshold for the Minimum Db Buffer Cache.
     *
     * @default - 0.
     */
    readonly dbBufferCacheMinimumThreshold?: number;
}
export interface WatchRdsAuroraProps extends WatchRdsAuroraOptions {
    readonly title: string;
    readonly watchful: IWatchful;
    readonly cluster: rds.DatabaseCluster;
}
export declare class WatchRdsAurora extends Construct {
    private readonly watchful;
    private readonly cluster;
    private readonly metrics;
    constructor(scope: Construct, id: string, props: WatchRdsAuroraProps);
    private createCpuUtilizationMonitor;
    private createDbConnectionsMonitor;
    private createDbReplicaLagMonitor;
    private createDbBufferCacheMonitor;
    private createDbDmlThroughputMonitor;
}
