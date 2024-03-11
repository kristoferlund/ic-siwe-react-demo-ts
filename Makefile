create-canisters:
	dfx canister create --all

deploy-provider:
	dfx deploy ic_siwe_provider --argument "( \
	    record { \
	        domain = \"127.0.0.1\"; \
	        uri = \"http://127.0.0.1:5173\"; \
	        salt = \"somerandomsalt\"; \
	        chain_id = opt 1; \
	        scheme = opt \"http\"; \
	        statement = opt \"Login to the SIWE/IC demo app\"; \
	        sign_in_expires_in = opt 300000000000; /* 5 minutes */ \
	        session_expires_in = opt 604800000000000; /* 1 week */ \
	        targets = opt vec { \
	            \"$$(dfx canister id ic_siwe_provider)\"; \
	            \"$$(dfx canister id backend)\"; \
	        }; \
	    } \
	)"

deploy-backend:
	npm install
	dfx deploy backend --argument "(principal \"$$(dfx canister id ic_siwe_provider)\")"

deploy-frontend:
	npm install
	dfx deploy frontend

deploy-all: create-canisters deploy-provider deploy-backend deploy-frontend

run-frontend:
	npm install
	npm run dev

clean:
	rm -rf .azle
	rm -rf .dfx
	rm -rf dist
	rm -rf node_modules
	rm -f .env
