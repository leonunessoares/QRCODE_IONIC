import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scannedData: any;
  validaDataScan: any = "0";
  //encodedData: '';
  //encodeData: any;

  constructor(public barcodeCtrl: BarcodeScanner) {}

 

  lerCodigo() {
      const options: BarcodeScannerOptions = {
        preferFrontCamera: false,
        showFlipCameraButton: true,
        showTorchButton: true,
        
        torchOn: false,
        prompt: 'Coloque o código dentro da área',
        resultDisplayDuration: 400,
        formats: 'QR_CODE,PDF_417,EAN_13',
        orientation: 'landscape',
      };
  
      this.barcodeCtrl.scan(options).then(barcodeData => {
        //alert('Barcode data' +  barcodeData);
        //alert(barcodeData.text);
        var str = barcodeData.text;
        this.validaDataScan = "0";
        if(str.match(/http/)){
         // alert('string encontrada');
          this.validaDataScan = "1";
          //alert(this.validaDataScan);
        
        }
        this.scannedData = barcodeData;
  
      }).catch(err => {
        alert('Error' +  err);
      });
    }
  
  
    
  
  }
