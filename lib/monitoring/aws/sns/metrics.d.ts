import { Metric } from 'aws-cdk-lib/aws-cloudwatch';
declare const enum Metrics {
    NumberOfMessagesPublished = "NumberOfMessagesPublished",
    NumberOfNotificationsDelivered = "NumberOfNotificationsDelivered",
    NumberOfNotificationsFailed = "NumberOfNotificationsFailed",
    PublishSize = "PublishSize"
}
export declare class SnsMetricFactory {
    metricNumberOfMessagesPublished(topicName: string): Metric;
    metricNumberOfMessagesDelivered(topicName: string): Metric;
    metricNumberOfNotificationsFailed(topicName: string): Metric;
    metricAverageMessageSizeInBytes(topicName: string): Metric;
    protected metric(metric: Metrics, topicName: string): Metric;
}
export {};
