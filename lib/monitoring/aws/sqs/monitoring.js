"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqsMonitoring = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_cloudwatch_1 = require("aws-cdk-lib/aws-cloudwatch");
const metrics_1 = require("./metrics");
const monitoring_1 = require("../../../core/monitoring");
const axis_1 = require("../../../widget/axis");
const constant_1 = require("../../../widget/constant");
const section_1 = require("../../../widget/section");
/**
 * Monitoring of SQS Queue.
 */
class SqsMonitoring extends monitoring_1.Monitoring {
    constructor(props) {
        super();
        this.section = this.headerProps(props);
        this.metrics = new metrics_1.SqsMetricFactory();
        this.visibleMessagesMetric = this.metrics.metricApproximateVisibleMessages(props.queue.queueName);
        this.incomingMessagesMetric = this.metrics.metricIncomingMessages(props.queue.queueName);
        this.oldestMessageAgeMetric = this.metrics.metricAgeOfOldestMessageInSeconds(props.queue.queueName);
        this.messageSizeMetric = this.metrics.metricAverageMessageSizeInBytes(props.queue.queueName);
        this.countAnnotations = [];
        this.ageAnnotations = [];
    }
    getWidgets() {
        return [
            this.headerWidget(),
            this.messageCountWidget(constant_1.CommonWidgetDimensions.ThirdWidth, constant_1.CommonWidgetDimensions.DefaultHeight),
            this.messageAgeWidget(constant_1.CommonWidgetDimensions.ThirdWidth, constant_1.CommonWidgetDimensions.DefaultHeight),
            this.messageSizeWidget(constant_1.CommonWidgetDimensions.ThirdWidth, constant_1.CommonWidgetDimensions.DefaultHeight),
        ];
    }
    headerWidget() {
        return new section_1.SectionWidget(this.section);
    }
    messageCountWidget(width, height) {
        return new aws_cloudwatch_1.GraphWidget({
            width,
            height,
            title: 'Message Count',
            left: [this.visibleMessagesMetric, this.incomingMessagesMetric],
            leftYAxis: axis_1.CountAxis,
            leftAnnotations: this.countAnnotations,
        });
    }
    messageAgeWidget(width, height) {
        return new aws_cloudwatch_1.GraphWidget({
            width,
            height,
            title: 'Oldest Message Age',
            left: [this.oldestMessageAgeMetric],
            leftYAxis: axis_1.TimeSecondsAxis,
            leftAnnotations: this.ageAnnotations,
        });
    }
    messageSizeWidget(width, height) {
        return new aws_cloudwatch_1.GraphWidget({
            width,
            height,
            title: 'Message Size',
            left: [this.messageSizeMetric],
            leftYAxis: axis_1.SizeBytesAxis,
        });
    }
    headerProps(props) {
        return {
            titleMarkdown: `SQS Queue **${props.queue.queueName}**`,
            quicklinks: this.headerQuickLinks(props),
            ...props,
        };
    }
    headerQuickLinks(props) {
        return [
            { title: 'Overview', url: this.urlForQueueOverview(props) },
        ];
    }
    urlForQueueOverview(props) {
        const region = aws_cdk_lib_1.Stack.of(props.queue).region;
        const queueUrl = props.queue.queueUrl;
        return `https://${region}.console.aws.amazon.com/sqs/v2/home?region=${region}#/queues/${queueUrl}`;
    }
}
exports.SqsMonitoring = SqsMonitoring;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uaXRvcmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb25pdG9yaW5nL2F3cy9zcXMvbW9uaXRvcmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBb0M7QUFDcEMsK0RBQWdHO0FBRWhHLHVDQUE2QztBQUM3Qyx5REFBdUU7QUFDdkUsK0NBQWlGO0FBQ2pGLHVEQUFrRTtBQUNsRSxxREFBNEU7QUFTNUU7O0dBRUc7QUFDSCxNQUFhLGFBQWMsU0FBUSx1QkFBVTtJQVkzQyxZQUFZLEtBQXlCO1FBQ25DLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSwwQkFBZ0IsRUFBRSxDQUFDO1FBRXRDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFN0YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU87WUFDTCxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQ0FBc0IsQ0FBQyxVQUFVLEVBQUUsaUNBQXNCLENBQUMsYUFBYSxDQUFDO1lBQ2hHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQ0FBc0IsQ0FBQyxVQUFVLEVBQUUsaUNBQXNCLENBQUMsYUFBYSxDQUFDO1lBQzlGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQ0FBc0IsQ0FBQyxVQUFVLEVBQUUsaUNBQXNCLENBQUMsYUFBYSxDQUFDO1NBQ2hHLENBQUM7SUFDSixDQUFDO0lBRVMsWUFBWTtRQUNwQixPQUFPLElBQUksdUJBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVTLGtCQUFrQixDQUFDLEtBQWEsRUFBRSxNQUFjO1FBQ3hELE9BQU8sSUFBSSw0QkFBVyxDQUFDO1lBQ3JCLEtBQUs7WUFDTCxNQUFNO1lBQ04sS0FBSyxFQUFFLGVBQWU7WUFDdEIsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztZQUMvRCxTQUFTLEVBQUUsZ0JBQVM7WUFDcEIsZUFBZSxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7U0FDdkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLGdCQUFnQixDQUFDLEtBQWEsRUFBRSxNQUFjO1FBQ3RELE9BQU8sSUFBSSw0QkFBVyxDQUFDO1lBQ3JCLEtBQUs7WUFDTCxNQUFNO1lBQ04sS0FBSyxFQUFFLG9CQUFvQjtZQUMzQixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsU0FBUyxFQUFFLHNCQUFlO1lBQzFCLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYztTQUNyQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsaUJBQWlCLENBQUMsS0FBYSxFQUFFLE1BQWM7UUFDdkQsT0FBTyxJQUFJLDRCQUFXLENBQUM7WUFDckIsS0FBSztZQUNMLE1BQU07WUFDTixLQUFLLEVBQUUsY0FBYztZQUNyQixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDOUIsU0FBUyxFQUFFLG9CQUFhO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFUyxXQUFXLENBQUMsS0FBeUI7UUFDN0MsT0FBTztZQUNMLGFBQWEsRUFBRSxlQUFlLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJO1lBQ3ZELFVBQVUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1lBQ3hDLEdBQUcsS0FBSztTQUNULENBQUM7SUFDSixDQUFDO0lBRVMsZ0JBQWdCLENBQUMsS0FBeUI7UUFDbEQsT0FBTztZQUNMLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO1NBQzVELENBQUM7SUFDSixDQUFDO0lBRVMsbUJBQW1CLENBQUMsS0FBeUI7UUFDckQsTUFBTSxNQUFNLEdBQUcsbUJBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM1QyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUN0QyxPQUFPLFdBQVcsTUFBTSw4Q0FBOEMsTUFBTSxZQUFZLFFBQVEsRUFBRSxDQUFDO0lBQ3JHLENBQUM7Q0FDRjtBQTNGRCxzQ0EyRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFjayB9IGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IEdyYXBoV2lkZ2V0LCBIb3Jpem9udGFsQW5ub3RhdGlvbiwgSVdpZGdldCwgTWV0cmljIH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWNsb3Vkd2F0Y2gnO1xuaW1wb3J0IHsgSVF1ZXVlIH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLXNxcyc7XG5pbXBvcnQgeyBTcXNNZXRyaWNGYWN0b3J5IH0gZnJvbSAnLi9tZXRyaWNzJztcbmltcG9ydCB7IE1vbml0b3JpbmcsIE1vbml0b3JpbmdQcm9wcyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbW9uaXRvcmluZyc7XG5pbXBvcnQgeyBDb3VudEF4aXMsIFNpemVCeXRlc0F4aXMsIFRpbWVTZWNvbmRzQXhpcyB9IGZyb20gJy4uLy4uLy4uL3dpZGdldC9heGlzJztcbmltcG9ydCB7IENvbW1vbldpZGdldERpbWVuc2lvbnMgfSBmcm9tICcuLi8uLi8uLi93aWRnZXQvY29uc3RhbnQnO1xuaW1wb3J0IHsgU2VjdGlvbldpZGdldCwgU2VjdGlvbldpZGdldFByb3BzIH0gZnJvbSAnLi4vLi4vLi4vd2lkZ2V0L3NlY3Rpb24nO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgdG8gY3JlYXRlIFNxc01vbml0b3JpbmcuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3FzTW9uaXRvcmluZ1Byb3BzIGV4dGVuZHMgTW9uaXRvcmluZ1Byb3BzIHtcbiAgcXVldWU6IElRdWV1ZTtcbn1cblxuLyoqXG4gKiBNb25pdG9yaW5nIG9mIFNRUyBRdWV1ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNxc01vbml0b3JpbmcgZXh0ZW5kcyBNb25pdG9yaW5nIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHNlY3Rpb246IFNlY3Rpb25XaWRnZXRQcm9wcztcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IG1ldHJpY3M6IFNxc01ldHJpY0ZhY3Rvcnk7XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHZpc2libGVNZXNzYWdlc01ldHJpYzogTWV0cmljO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgaW5jb21pbmdNZXNzYWdlc01ldHJpYzogTWV0cmljO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgb2xkZXN0TWVzc2FnZUFnZU1ldHJpYzogTWV0cmljO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWVzc2FnZVNpemVNZXRyaWM6IE1ldHJpYztcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgY291bnRBbm5vdGF0aW9uczogSG9yaXpvbnRhbEFubm90YXRpb25bXTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGFnZUFubm90YXRpb25zOiBIb3Jpem9udGFsQW5ub3RhdGlvbltdO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTcXNNb25pdG9yaW5nUHJvcHMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zZWN0aW9uID0gdGhpcy5oZWFkZXJQcm9wcyhwcm9wcyk7XG4gICAgdGhpcy5tZXRyaWNzID0gbmV3IFNxc01ldHJpY0ZhY3RvcnkoKTtcblxuICAgIHRoaXMudmlzaWJsZU1lc3NhZ2VzTWV0cmljID0gdGhpcy5tZXRyaWNzLm1ldHJpY0FwcHJveGltYXRlVmlzaWJsZU1lc3NhZ2VzKHByb3BzLnF1ZXVlLnF1ZXVlTmFtZSk7XG4gICAgdGhpcy5pbmNvbWluZ01lc3NhZ2VzTWV0cmljID0gdGhpcy5tZXRyaWNzLm1ldHJpY0luY29taW5nTWVzc2FnZXMocHJvcHMucXVldWUucXVldWVOYW1lKTtcbiAgICB0aGlzLm9sZGVzdE1lc3NhZ2VBZ2VNZXRyaWMgPSB0aGlzLm1ldHJpY3MubWV0cmljQWdlT2ZPbGRlc3RNZXNzYWdlSW5TZWNvbmRzKHByb3BzLnF1ZXVlLnF1ZXVlTmFtZSk7XG4gICAgdGhpcy5tZXNzYWdlU2l6ZU1ldHJpYyA9IHRoaXMubWV0cmljcy5tZXRyaWNBdmVyYWdlTWVzc2FnZVNpemVJbkJ5dGVzKHByb3BzLnF1ZXVlLnF1ZXVlTmFtZSk7XG5cbiAgICB0aGlzLmNvdW50QW5ub3RhdGlvbnMgPSBbXTtcbiAgICB0aGlzLmFnZUFubm90YXRpb25zID0gW107XG4gIH1cblxuICBnZXRXaWRnZXRzKCk6IElXaWRnZXRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuaGVhZGVyV2lkZ2V0KCksXG4gICAgICB0aGlzLm1lc3NhZ2VDb3VudFdpZGdldChDb21tb25XaWRnZXREaW1lbnNpb25zLlRoaXJkV2lkdGgsIENvbW1vbldpZGdldERpbWVuc2lvbnMuRGVmYXVsdEhlaWdodCksXG4gICAgICB0aGlzLm1lc3NhZ2VBZ2VXaWRnZXQoQ29tbW9uV2lkZ2V0RGltZW5zaW9ucy5UaGlyZFdpZHRoLCBDb21tb25XaWRnZXREaW1lbnNpb25zLkRlZmF1bHRIZWlnaHQpLFxuICAgICAgdGhpcy5tZXNzYWdlU2l6ZVdpZGdldChDb21tb25XaWRnZXREaW1lbnNpb25zLlRoaXJkV2lkdGgsIENvbW1vbldpZGdldERpbWVuc2lvbnMuRGVmYXVsdEhlaWdodCksXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoZWFkZXJXaWRnZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBTZWN0aW9uV2lkZ2V0KHRoaXMuc2VjdGlvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgbWVzc2FnZUNvdW50V2lkZ2V0KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBHcmFwaFdpZGdldCh7XG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHRpdGxlOiAnTWVzc2FnZSBDb3VudCcsXG4gICAgICBsZWZ0OiBbdGhpcy52aXNpYmxlTWVzc2FnZXNNZXRyaWMsIHRoaXMuaW5jb21pbmdNZXNzYWdlc01ldHJpY10sXG4gICAgICBsZWZ0WUF4aXM6IENvdW50QXhpcyxcbiAgICAgIGxlZnRBbm5vdGF0aW9uczogdGhpcy5jb3VudEFubm90YXRpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG1lc3NhZ2VBZ2VXaWRnZXQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IEdyYXBoV2lkZ2V0KHtcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgdGl0bGU6ICdPbGRlc3QgTWVzc2FnZSBBZ2UnLFxuICAgICAgbGVmdDogW3RoaXMub2xkZXN0TWVzc2FnZUFnZU1ldHJpY10sXG4gICAgICBsZWZ0WUF4aXM6IFRpbWVTZWNvbmRzQXhpcyxcbiAgICAgIGxlZnRBbm5vdGF0aW9uczogdGhpcy5hZ2VBbm5vdGF0aW9ucyxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBtZXNzYWdlU2l6ZVdpZGdldCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgR3JhcGhXaWRnZXQoe1xuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICB0aXRsZTogJ01lc3NhZ2UgU2l6ZScsXG4gICAgICBsZWZ0OiBbdGhpcy5tZXNzYWdlU2l6ZU1ldHJpY10sXG4gICAgICBsZWZ0WUF4aXM6IFNpemVCeXRlc0F4aXMsXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGVhZGVyUHJvcHMocHJvcHM6IFNxc01vbml0b3JpbmdQcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZU1hcmtkb3duOiBgU1FTIFF1ZXVlICoqJHtwcm9wcy5xdWV1ZS5xdWV1ZU5hbWV9KipgLFxuICAgICAgcXVpY2tsaW5rczogdGhpcy5oZWFkZXJRdWlja0xpbmtzKHByb3BzKSxcbiAgICAgIC4uLnByb3BzLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgaGVhZGVyUXVpY2tMaW5rcyhwcm9wczogU3FzTW9uaXRvcmluZ1Byb3BzKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHsgdGl0bGU6ICdPdmVydmlldycsIHVybDogdGhpcy51cmxGb3JRdWV1ZU92ZXJ2aWV3KHByb3BzKSB9LFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgdXJsRm9yUXVldWVPdmVydmlldyhwcm9wczogU3FzTW9uaXRvcmluZ1Byb3BzKSB7XG4gICAgY29uc3QgcmVnaW9uID0gU3RhY2sub2YocHJvcHMucXVldWUpLnJlZ2lvbjtcbiAgICBjb25zdCBxdWV1ZVVybCA9IHByb3BzLnF1ZXVlLnF1ZXVlVXJsO1xuICAgIHJldHVybiBgaHR0cHM6Ly8ke3JlZ2lvbn0uY29uc29sZS5hd3MuYW1hem9uLmNvbS9zcXMvdjIvaG9tZT9yZWdpb249JHtyZWdpb259Iy9xdWV1ZXMvJHtxdWV1ZVVybH1gO1xuICB9XG59XG4iXX0=