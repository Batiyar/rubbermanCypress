describe ('Module TTBC', () => {
    beforeEach(() => {
        cy.viewport(1500, 1000)
        cy.visit('https://admin.rubberman.timedoor-host.web.id', {
            headers: { 
            Authorization: `Basic dGltZWRvb3I6NEAwZ2FhJlNBSWcqdm8=`
            },timeout: 20000}).wait(500);
        cy.get('input[placeholder="Masukkan username"]').type('rin_nc');
        cy.get('input[type="password"]').type('@[ERB]O6pG&G');
        cy.get('.v-btn__content').contains('Login').click();
        cy.url().should('eq', 'https://admin.rubberman.timedoor-host.web.id/', {timeout: 20000});
    })
    it('Positive Case TTBC', () => {
      //Set tanggal dibuat TTBC
      const targetDate = "May 27, 2025"; // Format harus sama dengan aria-label
      cy.contains("Pengiriman & Penagihan", {timeout: 10000}).should('be.visible').click({force: true});      
      cy.contains("TTBC").should('be.visible').click({force: true});
      //Tambah TTBC
      cy.contains("Tambah TTBC").should('be.visible').click({force: true});
      cy.contains('h2','Informasi Dasar').should('be.visible');
      cy.contains("Pilih Foto").click({force: true});
      cy.get('input[type="file"]').selectFile('cypress/fixtures/contoh.png', { force: true });
      cy.get('input[placeholder="Pilih tanggal"]').first().click({force: true});
      cy.get('[id^="input-"] input.flat-picker-custom-style[placeholder="Pilih tanggal"]').eq(1).click({ force: true });
      cy.get('.dayContainer span[aria-label="' + targetDate + '"]').click({ force: true });
      cy.contains('label','No. TTBC').parent().find('input[type="text"]').type('TTBC0001');
      cy.get('input[placeholder="Cari nama konsumen"]').type('a').get('.v-overlay-container').contains('a').click();
      cy.get('input[placeholder="Cari nama sopir"]').type('a').get('.v-overlay-container').contains('a').click();
      cy.contains('label','Catatan').parent().find('textarea').type('TTBC0001');
      cy.tambahTTBC0();
      cy.tambahTTBC1();                  
      cy.get('span.v-btn__content > i.ri-file-copy-line').eq(1).click();
      cy.get('span.v-btn__content').contains('Buat TTBC').click({force: true});
      cy.get('span.v-btn__content').contains('Buat TTBC').click({force: true});
      cy.get('div.v-card-text > button.v-btn--elevated').find('.v-btn__content').should('contain', 'Buat TTBC').click({ force: true });
    });
});