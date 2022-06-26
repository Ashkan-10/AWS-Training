import boto3

s3 = boto3.client('s3')
response = s3.list_buckets()
buckets=response['Buckets']
for bucket in buckets:
    print(bucket['Name'])


# Create S3 Bucket
# region = 'ap-southeast-2'
# bucket = 'ashkan-12581'
# s3_client= boto3.client('s3', region_name=region)
# location = {'LocationConstraint' : region}
# s3_client.create_bucket(Bucket=bucket, CreateBucketConfiguration=location)