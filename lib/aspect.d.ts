import { IAspect } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';
export interface WatchfulAspectProps {
    /**
     * Automatically watch API Gateway APIs in the scope.
     * @default true
     */
    readonly apiGateway?: boolean;
    /**
     * Automatically watch all Amazon DynamoDB tables in the scope.
     * @default true
     */
    readonly dynamodb?: boolean;
    /**
     * Automatically watch AWS Lambda functions in the scope.
     * @default true
     */
    readonly lambda?: boolean;
    /**
     * Automatically watch AWS state machines in the scope.
     * @default true
     */
    readonly stateMachine?: boolean;
    /**
     * Automatically watch RDS Aurora clusters in the scope.
     * @default true
     */
    readonly rdsaurora?: boolean;
    /**
     * Automatically watch ApplicationLoadBalanced Fargate Ecs Services in the scope (using ECS Pattern).
     * @default true
     */
    readonly fargateecs?: boolean;
    /**
     * Automatically watch ApplicationLoadBalanced EC2 Ecs Services in the scope (using ECS Pattern).
     * @default true
     */
    readonly ec2ecs?: boolean;
}
/**
 * A CDK aspect that can automatically watch all resources within a scope.
 */
export declare class WatchfulAspect implements IAspect {
    private readonly watchful;
    private readonly props;
    /**
     * Defines a watchful aspect
     * @param watchful The watchful to add those resources to
     * @param props Options
     */
    constructor(watchful: Watchful, props?: WatchfulAspectProps);
    visit(node: IConstruct): void;
}
import { Watchful } from './watchful';
