import { Metric } from 'aws-cdk-lib/aws-cloudwatch';
declare const enum Metrics {
    ApproximateNumberOfMessagesVisible = "ApproximateNumberOfMessagesVisible",
    NumberOfMessagesSent = "NumberOfMessagesSent",
    ApproximateAgeOfOldestMessage = "ApproximateAgeOfOldestMessage",
    SentMessageSize = "SentMessageSize"
}
export declare class SqsMetricFactory {
    metricApproximateVisibleMessages(queueName: string): Metric;
    metricIncomingMessages(queueName: string): Metric;
    metricAgeOfOldestMessageInSeconds(queueName: string): Metric;
    metricAverageMessageSizeInBytes(queueName: string): Metric;
    protected metric(metric: Metrics, queueName: string): Metric;
}
export {};
