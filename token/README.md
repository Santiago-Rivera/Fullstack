# DFaucet Token Project

## Check your Balance

1. Find out your principal id:

```bash
dfx identity get-principal
```

1. Save it somewhere.

e.g. My principal id is: blah-blah-blah

1. Format and store it in a command line variable:

```bash
OWNER_PUBLIC_KEY="principal \"$( \dfx identity get-principal )\""
```

1. Check that step 3 worked by printing it out:

```bash
echo $OWNER_PUBLIC_KEY
```

1. Check the owner's balance:

```bash
dfx canister call token balanceOf "( $OWNER_PUBLIC_KEY )"
```

## Charge the Canister

1. Check canister ID:

```bash
dfx canister id token
```

1. Save canister ID into a command line variable:

```bash
CANISTER_PUBLIC_KEY="principal \"$( \dfx canister id token )\""
```

1. Check canister ID has been successfully saved:

```bash
echo $CANISTER_PUBLIC_KEY
```

1. Transfer half a billion tokens to the canister Principal ID:

```bash
dfx canister call token transfer "($CANISTER_PUBLIC_KEY, 500_000_000)"
```

## Deploy the Project to the Live IC Network

1. Create and deploy canisters:

```bash
dfx deploy --network ic
```

1. Check the live canister ID:

```bash
dfx canister --network ic id token
```

1. Save the live canister ID to a command line variable:

```bash
LIVE_CANISTER_KEY="principal \"$( \dfx canister --network ic id token )\""
```

1. Check that it worked:

```bash
echo $LIVE_CANISTER_KEY
```

1. Transfer some tokens to the live canister:

```bash
dfx canister --network ic call token transfer "($LIVE_CANISTER_KEY, 50_000_000)"
```

1. Get live canister front-end id:

```bash
dfx canister --network ic id token_assets
```

1. Copy the id from step 6 and add .raw.ic0.app to the end to form a URL.
   e.g. blah-blah-blah.raw.ic0.app
