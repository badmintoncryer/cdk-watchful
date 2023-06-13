"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDbMetricFactory = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_cloudwatch_1 = require("aws-cdk-lib/aws-cloudwatch");
const Namespace = 'AWS/DynamoDB';
class DynamoDbMetricFactory {
    metricConsumedCapacityUnits(tableName) {
        return {
            read: this.metric("ConsumedReadCapacityUnits" /* ConsumedReadCapacityUnits */, tableName).with({ label: 'Consumed (Read)' }),
            write: this.metric("ConsumedWriteCapacityUnits" /* ConsumedWriteCapacityUnits */, tableName).with({ label: 'Consumed (Write)' }),
        };
    }
    metric(metric, tableName) {
        return new aws_cloudwatch_1.Metric({
            metricName: metric,
            namespace: Namespace,
            period: aws_cdk_lib_1.Duration.minutes(1),
            statistic: aws_cloudwatch_1.Statistic.SUM,
            dimensionsMap: {
                TableName: tableName,
            },
        });
    }
}
exports.DynamoDbMetricFactory = DynamoDbMetricFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0cmljcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb25pdG9yaW5nL2F3cy9keW5hbW9kYi9tZXRyaWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUF1QztBQUN2QywrREFBK0Q7QUFPL0QsTUFBTSxTQUFTLEdBQUcsY0FBYyxDQUFDO0FBRWpDLE1BQWEscUJBQXFCO0lBQ2hDLDJCQUEyQixDQUFDLFNBQWlCO1FBQzNDLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sOERBQW9DLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxDQUFDO1lBQ2xHLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxnRUFBcUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLENBQUM7U0FDdEcsQ0FBQztJQUNKLENBQUM7SUFFUyxNQUFNLENBQUMsTUFBZSxFQUFFLFNBQWlCO1FBQ2pELE9BQU8sSUFBSSx1QkFBTSxDQUFDO1lBQ2hCLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE1BQU0sRUFBRSxzQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDM0IsU0FBUyxFQUFFLDBCQUFTLENBQUMsR0FBRztZQUN4QixhQUFhLEVBQUU7Z0JBQ2IsU0FBUyxFQUFFLFNBQVM7YUFDckI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFuQkQsc0RBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBNZXRyaWMsIFN0YXRpc3RpYyB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1jbG91ZHdhdGNoJztcblxuY29uc3QgZW51bSBNZXRyaWNzIHtcbiAgQ29uc3VtZWRSZWFkQ2FwYWNpdHlVbml0cyA9ICdDb25zdW1lZFJlYWRDYXBhY2l0eVVuaXRzJyxcbiAgQ29uc3VtZWRXcml0ZUNhcGFjaXR5VW5pdHMgPSAnQ29uc3VtZWRXcml0ZUNhcGFjaXR5VW5pdHMnLFxufVxuXG5jb25zdCBOYW1lc3BhY2UgPSAnQVdTL0R5bmFtb0RCJztcblxuZXhwb3J0IGNsYXNzIER5bmFtb0RiTWV0cmljRmFjdG9yeSB7XG4gIG1ldHJpY0NvbnN1bWVkQ2FwYWNpdHlVbml0cyh0YWJsZU5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB7XG4gICAgICByZWFkOiB0aGlzLm1ldHJpYyhNZXRyaWNzLkNvbnN1bWVkUmVhZENhcGFjaXR5VW5pdHMsIHRhYmxlTmFtZSkud2l0aCh7IGxhYmVsOiAnQ29uc3VtZWQgKFJlYWQpJyB9KSxcbiAgICAgIHdyaXRlOiB0aGlzLm1ldHJpYyhNZXRyaWNzLkNvbnN1bWVkV3JpdGVDYXBhY2l0eVVuaXRzLCB0YWJsZU5hbWUpLndpdGgoeyBsYWJlbDogJ0NvbnN1bWVkIChXcml0ZSknIH0pLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgbWV0cmljKG1ldHJpYzogTWV0cmljcywgdGFibGVOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IE1ldHJpYyh7XG4gICAgICBtZXRyaWNOYW1lOiBtZXRyaWMsXG4gICAgICBuYW1lc3BhY2U6IE5hbWVzcGFjZSxcbiAgICAgIHBlcmlvZDogRHVyYXRpb24ubWludXRlcygxKSxcbiAgICAgIHN0YXRpc3RpYzogU3RhdGlzdGljLlNVTSxcbiAgICAgIGRpbWVuc2lvbnNNYXA6IHtcbiAgICAgICAgVGFibGVOYW1lOiB0YWJsZU5hbWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iXX0=