class CustomWalletsController < ApplicationController

    def create
        wallet = CustomWallet.create!(wallet_params)
        render json wallet, status: created
    end

    def index
        render json: CustomWallet.all, status: ok
    end

    def destroy
        wallet = finder
        wallet.destroy
        head :no_content
    end

    def update
        wallet = finder
        wallet.update(wallet_params)
        render json: post, status: :ok
    end

    private
        def wallet_params
            params.permit(:user_id, :whale_wallet_id, :alias)
        end

        def finder
            wallet = CustomWallet.find(params[:id])
        end
end
