"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LambdaMetricFactory = void 0;
const cdk = require("aws-cdk-lib");
const aws_cloudwatch_1 = require("aws-cdk-lib/aws-cloudwatch");
const Namespace = 'AWS/Lambda';
class LambdaMetricFactory {
    metricInvocations(functionName) {
        return this.metric("Invocations" /* Invocations */, functionName).with({ statistic: aws_cloudwatch_1.Statistic.SUM });
    }
    metricDuration(functionName) {
        const baseMetric = this.metric("Duration" /* Duration */, functionName);
        return {
            min: baseMetric.with({ statistic: aws_cloudwatch_1.Statistic.MINIMUM, label: aws_cloudwatch_1.Statistic.MINIMUM }),
            avg: baseMetric.with({ statistic: aws_cloudwatch_1.Statistic.AVERAGE, label: aws_cloudwatch_1.Statistic.AVERAGE }),
            p50: baseMetric.with({ statistic: 'p50', label: 'p50' }),
            p90: baseMetric.with({ statistic: 'p90', label: 'p90' }),
            p99: baseMetric.with({ statistic: 'p99', label: 'p99' }),
            max: baseMetric.with({ statistic: aws_cloudwatch_1.Statistic.MAXIMUM, label: aws_cloudwatch_1.Statistic.MAXIMUM }),
        };
    }
    metricErrors(functionName) {
        return this.metric("Errors" /* Errors */, functionName).with({ statistic: aws_cloudwatch_1.Statistic.SUM });
    }
    metricThrottles(functionName) {
        return this.metric("Throttles" /* Throttles */, functionName).with({ statistic: aws_cloudwatch_1.Statistic.SUM });
    }
    metric(metric, functionName) {
        return new aws_cloudwatch_1.Metric({
            metricName: metric,
            namespace: Namespace,
            period: cdk.Duration.minutes(5),
            dimensionsMap: {
                FunctionName: functionName,
            },
        });
    }
}
exports.LambdaMetricFactory = LambdaMetricFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0cmljcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb25pdG9yaW5nL2F3cy9sYW1iZGEvbWV0cmljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFDbkMsK0RBQStEO0FBUy9ELE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQztBQUUvQixNQUFhLG1CQUFtQjtJQUM5QixpQkFBaUIsQ0FBQyxZQUFvQjtRQUNwQyxPQUFPLElBQUksQ0FBQyxNQUFNLGtDQUFzQixZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsMEJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRCxjQUFjLENBQUMsWUFBb0I7UUFDakMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sNEJBQW1CLFlBQVksQ0FBQyxDQUFDO1FBRS9ELE9BQU87WUFDTCxHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSwwQkFBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsMEJBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoRixHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSwwQkFBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsMEJBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoRixHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ3hELEdBQUcsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDeEQsR0FBRyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUN4RCxHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSwwQkFBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsMEJBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNqRixDQUFDO0lBQ0osQ0FBQztJQUVELFlBQVksQ0FBQyxZQUFvQjtRQUMvQixPQUFPLElBQUksQ0FBQyxNQUFNLHdCQUFpQixZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsMEJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxlQUFlLENBQUMsWUFBb0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsTUFBTSw4QkFBb0IsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLDBCQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRVMsTUFBTSxDQUFDLE1BQWUsRUFBRSxZQUFvQjtRQUNwRCxPQUFPLElBQUksdUJBQU0sQ0FBQztZQUNoQixVQUFVLEVBQUUsTUFBTTtZQUNsQixTQUFTLEVBQUUsU0FBUztZQUNwQixNQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQy9CLGFBQWEsRUFBRTtnQkFDYixZQUFZLEVBQUUsWUFBWTthQUMzQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQXBDRCxrREFvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgTWV0cmljLCBTdGF0aXN0aWMgfSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtY2xvdWR3YXRjaCc7XG5cbmNvbnN0IGVudW0gTWV0cmljcyB7XG4gIEludm9jYXRpb25zID0gJ0ludm9jYXRpb25zJyxcbiAgRHVyYXRpb24gPSAnRHVyYXRpb24nLFxuICBFcnJvcnMgPSAnRXJyb3JzJyxcbiAgVGhyb3R0bGVzID0gJ1Rocm90dGxlcydcbn1cblxuY29uc3QgTmFtZXNwYWNlID0gJ0FXUy9MYW1iZGEnO1xuXG5leHBvcnQgY2xhc3MgTGFtYmRhTWV0cmljRmFjdG9yeSB7XG4gIG1ldHJpY0ludm9jYXRpb25zKGZ1bmN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0cmljKE1ldHJpY3MuSW52b2NhdGlvbnMsIGZ1bmN0aW9uTmFtZSkud2l0aCh7IHN0YXRpc3RpYzogU3RhdGlzdGljLlNVTSB9KTtcbiAgfVxuXG4gIG1ldHJpY0R1cmF0aW9uKGZ1bmN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgYmFzZU1ldHJpYyA9IHRoaXMubWV0cmljKE1ldHJpY3MuRHVyYXRpb24sIGZ1bmN0aW9uTmFtZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWluOiBiYXNlTWV0cmljLndpdGgoeyBzdGF0aXN0aWM6IFN0YXRpc3RpYy5NSU5JTVVNLCBsYWJlbDogU3RhdGlzdGljLk1JTklNVU0gfSksXG4gICAgICBhdmc6IGJhc2VNZXRyaWMud2l0aCh7IHN0YXRpc3RpYzogU3RhdGlzdGljLkFWRVJBR0UsIGxhYmVsOiBTdGF0aXN0aWMuQVZFUkFHRSB9KSxcbiAgICAgIHA1MDogYmFzZU1ldHJpYy53aXRoKHsgc3RhdGlzdGljOiAncDUwJywgbGFiZWw6ICdwNTAnIH0pLFxuICAgICAgcDkwOiBiYXNlTWV0cmljLndpdGgoeyBzdGF0aXN0aWM6ICdwOTAnLCBsYWJlbDogJ3A5MCcgfSksXG4gICAgICBwOTk6IGJhc2VNZXRyaWMud2l0aCh7IHN0YXRpc3RpYzogJ3A5OScsIGxhYmVsOiAncDk5JyB9KSxcbiAgICAgIG1heDogYmFzZU1ldHJpYy53aXRoKHsgc3RhdGlzdGljOiBTdGF0aXN0aWMuTUFYSU1VTSwgbGFiZWw6IFN0YXRpc3RpYy5NQVhJTVVNIH0pLFxuICAgIH07XG4gIH1cblxuICBtZXRyaWNFcnJvcnMoZnVuY3Rpb25OYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRyaWMoTWV0cmljcy5FcnJvcnMsIGZ1bmN0aW9uTmFtZSkud2l0aCh7IHN0YXRpc3RpYzogU3RhdGlzdGljLlNVTSB9KTtcbiAgfVxuXG4gIG1ldHJpY1Rocm90dGxlcyhmdW5jdGlvbk5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLm1ldHJpYyhNZXRyaWNzLlRocm90dGxlcywgZnVuY3Rpb25OYW1lKS53aXRoKHsgc3RhdGlzdGljOiBTdGF0aXN0aWMuU1VNIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG1ldHJpYyhtZXRyaWM6IE1ldHJpY3MsIGZ1bmN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBNZXRyaWMoe1xuICAgICAgbWV0cmljTmFtZTogbWV0cmljLFxuICAgICAgbmFtZXNwYWNlOiBOYW1lc3BhY2UsXG4gICAgICBwZXJpb2Q6IGNkay5EdXJhdGlvbi5taW51dGVzKDUpLFxuICAgICAgZGltZW5zaW9uc01hcDoge1xuICAgICAgICBGdW5jdGlvbk5hbWU6IGZ1bmN0aW9uTmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==