import { Component, OnInit } from '@angular/core';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  public walletConnected: boolean = false;
  public walletId: string = '';

  constructor(private walletService: WalletService) {}

  connectToWallet = () => {
    this.walletService.connectWallet();
  };

  checkWalletConnected = async () => {
    const accounts = await this.walletService.checkWalletConnected();
    if (accounts.length > 0) {
      this.walletConnected = true;
      this.walletId = accounts[0];
    }
  };
  ngOnInit(): void {
    this.checkWalletConnected();
  }
}
