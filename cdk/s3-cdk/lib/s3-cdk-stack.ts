import { Stack, StackProps, aws_s3 as s3, RemovalPolicy, Duration, aws_iam as iam} from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class S3CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const s3Bucket = new s3.Bucket(this, 's3-bucket',{
    bucketName: `ashkan-s3-${this.account}`,
    // bucketName: `ashkan-s3-1258`,
    removalPolicy: RemovalPolicy.DESTROY,
    autoDeleteObjects: true,
    versioned: false,
    publicReadAccess: false,
    encryption: s3.BucketEncryption.S3_MANAGED,

    lifecycleRules: [
      {
        abortIncompleteMultipartUploadAfter: Duration.days(90),
        expiration: Duration.days(365),
        transitions: [
          {
            storageClass: s3.StorageClass.INFREQUENT_ACCESS,
            transitionAfter: Duration.days(30),
          }
        ]
      }
    ]
    });

    // grant access to bucket:
    s3Bucket.grantRead(new iam.AccountRootPrincipal());
    
  }
}
