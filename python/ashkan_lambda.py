def print_arr(array):
    for item in array:
        print(item)

def lambda_handler(event, context):
    arr=["saeid","ashkan","shahriar"]
    print_arr(arr)



{
  "Version": "2012-10-17",
  "Statement": {
    "Effect": "Allow",
    "Action": "sts:AssumeRole",
    "Resource": "arn:aws:iam::account-id:role/Test*"
  }
}