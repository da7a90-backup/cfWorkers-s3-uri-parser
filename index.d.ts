declare module "amazon-s3-uri" {
    export = AmazonS3URI;
    /**
     * A URI wrapper that can parse out information about an S3 URI
     *
     * @example <caption>instanciate AmazonS3URI</caption>
     * try {
     *  const uri = 'https://bucket.s3-aws-region.amazonaws.com/key'
     *  const { region, bucket, key } = new AmazonS3URI(uri)
     * } catch (err) {
     *  console.warn(`${uri} is not a valid S3 uri`) // should not happen because `uri` is valid in that example
     * }
     * @example <caption>functional interface: it automatically returns an AmazonS3URI instance</caption>
     *  const { region, bucket, key } = AmazonS3URI(uri)
     * @param {string} uri - the URI to parse
     * @throws {TypeError|Error}
     */
    function AmazonS3URI(uri: string): AmazonS3URI;
    class AmazonS3URI {
        /**
         * A URI wrapper that can parse out information about an S3 URI
         *
         * @example <caption>instanciate AmazonS3URI</caption>
         * try {
         *  const uri = 'https://bucket.s3-aws-region.amazonaws.com/key'
         *  const { region, bucket, key } = new AmazonS3URI(uri)
         * } catch (err) {
         *  console.warn(`${uri} is not a valid S3 uri`) // should not happen because `uri` is valid in that example
         * }
         * @example <caption>functional interface: it automatically returns an AmazonS3URI instance</caption>
         *  const { region, bucket, key } = AmazonS3URI(uri)
         * @param {string} uri - the URI to parse
         * @throws {TypeError|Error}
         */
        constructor(uri: string);
        /**
         * URL object from `url.parse`
         * @type { URL }
         * */
        uri: URL;
        /**
         * the bucket name parsed from the URI (or null if no bucket specified)
         * @type { string | null }
         * */
        bucket: string | null;
        /**
         * the region parsed from the URI (or `DEFAULT_REGION`)
         * @type { string }
         * */
        region: string;
        /**
         * the key parsed from the URI (or null if no key specified)
         * @type {string | null}
         * */
        key: string | null;
        /**
         * true if the URI contains the bucket in the path,
         * false if it contains the bucket in the authority
         * @type { boolean }
         * */
        isPathStyle: boolean;
        /**
         * @constant
         * @default 'us-east-1'
         */
        DEFAULT_REGION: string;
    }
}
