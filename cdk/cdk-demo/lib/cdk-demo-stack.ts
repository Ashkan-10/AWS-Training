import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Vpc, SubnetType } from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkDemoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const vpc = new Vpc(this, 'ashkan-vpc',{
    
      // CHANGE: this is where we define how many AZs to use
      maxAzs: 2,
        
     // CHANGE: We define a single subnet configuration per AZ.
        subnetConfiguration:  [
          {
            // CHANGE: this is it's CIDR mask so 255.255.255.0
            cidrMask: 24,
  
            // CHANGE: a name for each of these subnets
            name: 'public-subnet',
  
            // CHANGE: and the subnet type to be used - here we will have
            // a public subnet. There are other options available here.
            subnetType: SubnetType.PUBLIC
          },
          {
            // Private Subnet with NAT:
            cidrMask: 24,
            name: 'private-subnet',
            subnetType: SubnetType.PRIVATE_WITH_NAT

          }
        ]
      });
    

   
  }
}
