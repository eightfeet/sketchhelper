export const exportKey = (publicKey: CryptoKey) =>
    window.crypto.subtle
        .exportKey(
            'jwk', //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
            publicKey //can be a publicKey or privateKey, as long as extractable was true
        )
        .then(function (keydata) {
            //returns the exported key data
            console.log(keydata);
            return keydata;
        })
        .catch(function (err) {
            console.error(err);
        });

export const importKey = (data: {
    kty: string;
    e: string;
    n: string;
    alg: string;
    ext: boolean;
}) =>
    window.crypto.subtle
        .importKey(
            'jwk', //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
            data,
            {
                //these are the algorithm options
                name: 'RSA-PSS',
                hash: { name: 'SHA-256' }, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
            },
            false, //whether the key is extractable (i.e. can be used in exportKey)
            ['verify'] //"verify" for public key import, "sign" for private key imports
        )
        .then(function (publicKey) {
            //returns a publicKey (or privateKey if you are importing a private key)
            console.log(publicKey);
        })
        .catch(function (err) {
            console.error(err);
        });

export const generateKey = () =>
    window.crypto.subtle
        .generateKey(
            {
                name: 'RSA-PSS',
                modulusLength: 2048, //can be 1024, 2048, or 4096
                publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                hash: { name: 'SHA-256' }, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
            },
            true, //whether the key is extractable (i.e. can be used in exportKey)
            ['sign', 'verify'] //can be any combination of "sign" and "verify"
        )
        .then(async function (key) {
            const { alg, e, n, ext, kty } = (await exportKey(key.privateKey)) as any;
            importKey({alg, e, n, ext, kty});
        })
        .catch(function (err) {
            console.error(err);
        });

export const sign = (privateKey: any, data: any) =>
    window.crypto.subtle
        .sign(
            {
                name: 'RSA-PSS',
                saltLength: 128, //the length of the salt
            },
            privateKey, //from generateKey or importKey above
            data //ArrayBuffer of data you want to sign
        )
        .then(function (signature) {
            //returns an ArrayBuffer containing the signature
            console.log(new Uint8Array(signature));
        })
        .catch(function (err) {
            console.error(err);
        });

export const verify = (publicKey: any, signature: any, data: any) =>
    window.crypto.subtle
        .verify(
            {
                name: 'RSA-PSS',
                saltLength: 128, //the length of the salt
            },
            publicKey, //from generateKey or importKey above
            signature, //ArrayBuffer of the signature
            data //ArrayBuffer of the data
        )
        .then(function (isvalid) {
            //returns a boolean on whether the signature is true or not
            console.log(isvalid);
        })
        .catch(function (err) {
            console.error(err);
        });
