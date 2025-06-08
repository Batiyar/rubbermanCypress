import { faker } from '@faker-js/faker';
describe ('Flow Permintaan Bahan Baku', () => {
    beforeEach(() => {
        cy.viewport(1500, 1000);
    })
    // it("Admin Cabang Buat permintaan bahan baku", () => {
    //     cy.intercept('POST', '**/api/branch/**/request-material**').as('getPermintaanBahanBaku');
    //     cy.login_sc();
    //     //Set tanggal dibuat Permintaan bahan baku
    //     const targetDate = "June 4, 2025"; // Format harus sama dengan aria-label
    //     /////////////////////////////////////////////////////////////////////////
    //     cy.contains("Pembelian", {timeout: 10000}).should('be.visible').click({force: true});
    //     cy.contains("Permintaan Bahan Baku").should('be.visible').click({force: true});
    //     cy.contains("Buat Permintaan").should('be.visible').click({force: true});
    //     cy.get('h2.text-h5').contains('Tread').should('be.visible');
    //     //Tambah Tread
    //     const tread = ["Rubberman super", "100"];
    //     const CG = ["CG 24","100"];
    //     const bhnPembantu = ["Envelope 2000-30","100"];
    //     cy.get('.v-table__wrapper').eq(0).find('.v-btn__content').click({force: true});
    //     cy.get('input[placeholder="Pilih Tread"]').type(tread[0]).get('.v-overlay-container').contains(tread[0]).click();
    //     cy.get('input[placeholder="Jumlah LBR"]').type(tread[1])
    //     //Tambah CG
    //     cy.get('.v-table__wrapper').eq(1).find('.v-btn__content').click({force: true});
    //     cy.get('input[placeholder="Pilih Barang"]').type(CG[0]).get('.v-overlay-container').contains(CG[0]).click();
    //     cy.get('input[placeholder="Jumlah"]').type(CG[1])
    //     //Tambah Bahan Pembantu
    //     cy.get('.v-table__wrapper').eq(2).find('.v-btn__content').click({force: true});
    //     cy.get('input[placeholder="Pilih Barang"]').type(bhnPembantu[0]).get('.v-overlay-container').contains(bhnPembantu[0]).click();
    //     cy.get('input[placeholder="Jumlah"]').eq(1).type(bhnPembantu[1])
    //     cy.scrollTo('top');
    //     cy.contains('label','Catatan').parent().find('textarea').type('TTBC0001');
    //     // input tanggal
    //     cy.get('input[placeholder="Pilih tanggal"]').first().click({force: true});
    //     cy.get('[id^="input-"] input.flat-picker-custom-style[placeholder="Pilih tanggal"]').eq(1).click({ force: true });
    //     cy.get('.dayContainer span[aria-label="' + targetDate + '"]').click({ force: true });
    //     cy.get('span.v-btn__content').contains('Buat & Ajukan').click({force: true});
    //     cy.wait(2000);
    //     cy.wait('@getPermintaanBahanBaku').then((xhr) => {            
    //         expect(xhr.response.body).to.have.property('data');
    //         const data = xhr.response.body.data;
    //         cy.writeFile('cypress/fixtures/permintaanBahanBaku.json', data);
    //     });
    // });
    // it('Admin Pusat Accept Permintaan bahan baku', () => {
    //     cy.login_sp();
    //     cy.url().should('eq', 'https://admin.rubberman.timedoor-host.web.id/', {timeout: 20000});
    //     cy.contains("Pembelian", {timeout: 10000}).should('be.visible').click({force: true});
    //     cy.contains("Permintaan Bahan Baku").should('be.visible').click({force: true});  
    //     cy.readFile('cypress/fixtures/permintaanBahanBaku.json').then((data) => {
    //         const expectedId =data.id; // Ambil ID dari JSON (88)
    //         const expectedUrl = `https://admin.rubberman.timedoor-host.web.id/hq/material-request/${expectedId}`;
    //         cy.get('span.v-btn__content').find('i.ri-eye-line').eq(0).click({ force: true });
    //         cy.url().should('eq', expectedUrl); // Pastikan URL sama persis
    //     });   
    //     cy.get('button[type="button"]').find('span.v-btn__content').contains('Setujui').click({force: true});
    //     cy.get('div.v-card-text > button[type="button"]').find('.v-btn__content').contains('Iya, Setujui').click({ force: true });
    // });
    it('Admin Cabang Menerima Bahan Baku', () => {
        cy.login_sc();
        cy.contains("Pembelian", {timeout: 10000}).should('be.visible').click({force: true});
        cy.contains("Penerimaan Barang").should('be.visible').click({force: true});
        cy.get('button[type="button"]').find('span.v-btn__content').should('be.visible');
        cy.wait(5000);
        cy.get('button[type="button"]').find('span.v-btn__content').should('be.visible');
        cy.get('div.mb-6 > a.v-btn--elevated').find('.v-btn__content').should('contain', 'Tambah Penerimaan').click({ force: true });
        cy.get('input[placeholder="Masukkan Nomor Surat"]').type(faker.number.int({min : 100, max: 900}, { force: true }));
        cy.contains('label','Catatan').parent().find('textarea').type(faker.finance.amount());
    });
})