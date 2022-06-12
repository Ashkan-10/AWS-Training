import { Stack, StackProps, aws_ec2 as ec2, aws_iam as iam } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { readFileSync } from 'fs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class Ec2CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const myVpc = new ec2.Vpc(this, 'ashkan-cdk-vpc', {
      cidr: '10.0.0.0/16',
      subnetConfiguration: [
        {name: 'ashkan-public', cidrMask: 24, subnetType: ec2.SubnetType.PUBLIC}
      ]
    });
    
    // create security group for instance
    const webserverSG = new ec2.SecurityGroup(this, 'webserver-sg', {
      vpc:myVpc,
      allowAllOutbound: true,
    });

    webserverSG.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(22),
      'allow SSH access from anywhere'
    );

    webserverSG.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(80),
      'allow HTTP traffic from anywhere'
    );

    webserverSG.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(443),
      'allow HTTPS traffic from anywhere'
    );

    // EC2 Role for read only access to S3:
    const webserverRole = new iam.Role(this, 'webserver-role', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'), 
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonS3ReadOnlyAccess'),
      ]
    });
    
    // create the EC2 instance

  const ec2Instance = new ec2.Instance(this, 'ec2-instance',{
    vpc:myVpc,
    vpcSubnets: {
      subnetType: ec2.SubnetType.PUBLIC
    },
    role: webserverRole,
    securityGroup: webserverSG,
    instanceType: ec2.InstanceType.of(
      ec2.InstanceClass.BURSTABLE2,
      ec2.InstanceSize.MICRO,
    ),
    machineImage: new ec2.AmazonLinuxImage({
      generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2
    }),
    keyName: 'ashkan-keypair',
  });
  // load content to script
  const userDataScript = readFileSync('./lib/user-data.sh' , 'utf8')
  // add the User Data script to the Instance
  ec2Instance.addUserData(userDataScript)




  }
}
