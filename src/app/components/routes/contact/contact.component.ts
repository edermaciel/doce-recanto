import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  contactObj = {
    title: 'Pousada Doce Recanto',
    subTitle: 'Reserve já sua estadia!',
    description: `Se desejar esclarecer alguma dúvida ou saber maiores informações, mande-nos uma mensagem no Whatsapp. Será um prazer ajudarmos você a conhecer o sul de minas e tornar sua estadia inesquecível!`,
  }

  ownerList: any[] = [
    {
      ownerStatus: '',
      ownerName: 'Whatsapp',
      ownerNumber: '(35) 99772-0276',
      ownerImage: 'assets/images/logo-pousada.png',
      ownerLink: 'https://wa.me/5535997720276?text=Olá,%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Pousada%20Doce%20Recanto,%20você%20pode%20me%20ajudar?%20Agradeço desde já!%20:)'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setTimeout(() => {
      let btn = document.getElementById('contact-sticky-btn') as HTMLElement;
      if (btn) btn.classList.add('fade-in');
    }, 2500);
  }

}
