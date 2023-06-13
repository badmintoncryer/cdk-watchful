import { GraphWidget, HorizontalAnnotation, IWidget, Metric } from 'aws-cdk-lib/aws-cloudwatch';
import { IQueue } from 'aws-cdk-lib/aws-sqs';
import { SqsMetricFactory } from './metrics';
import { Monitoring, MonitoringProps } from '../../../core/monitoring';
import { SectionWidget, SectionWidgetProps } from '../../../widget/section';
/**
 * Properties to create SqsMonitoring.
 */
export interface SqsMonitoringProps extends MonitoringProps {
    queue: IQueue;
}
/**
 * Monitoring of SQS Queue.
 */
export declare class SqsMonitoring extends Monitoring {
    protected readonly section: SectionWidgetProps;
    protected readonly metrics: SqsMetricFactory;
    protected readonly visibleMessagesMetric: Metric;
    protected readonly incomingMessagesMetric: Metric;
    protected readonly oldestMessageAgeMetric: Metric;
    protected readonly messageSizeMetric: Metric;
    protected readonly countAnnotations: HorizontalAnnotation[];
    protected readonly ageAnnotations: HorizontalAnnotation[];
    constructor(props: SqsMonitoringProps);
    getWidgets(): IWidget[];
    protected headerWidget(): SectionWidget;
    protected messageCountWidget(width: number, height: number): GraphWidget;
    protected messageAgeWidget(width: number, height: number): GraphWidget;
    protected messageSizeWidget(width: number, height: number): GraphWidget;
    protected headerProps(props: SqsMonitoringProps): {
        queue: IQueue;
        titleMarkdown: string;
        descriptionMarkdown?: string | undefined;
        quicklinks: {
            title: string;
            url: string;
        }[];
    };
    protected headerQuickLinks(props: SqsMonitoringProps): {
        title: string;
        url: string;
    }[];
    protected urlForQueueOverview(props: SqsMonitoringProps): string;
}
