cy.get('div.v-field__field').find('label.v-label').should('contain', 'Catatan').type(faker.finance.amount());
cy.get('div.mb-6 > a.v-btn--elevated').find('.v-btn__content').should('contain', 'Tambah Penerimaan').click({ force: true });
// Case button gak ke detect sama cypress
cy.get('div.v-card-text > button.v-btn--elevated').find('.v-btn__content').should('contain', 'Buat TTBC').click({ force: true });
//Export data list TTBC
cy.intercept('GET', '**/api/branch/64/ttbc**').as('getTTBC');
cy.wait('@getTTBC').then((xhr) => {
    expect(xhr.response.statusCode).to.eq(200);
    expect(xhr.response.body).to.have.property('data');
    const data = xhr.response.body.data;
    cy.writeFile('cypress/fixtures/ttbc.json', data);
});
cy.readFile('cypress/fixtures/ttbc.json').then((data) => {
    const existingDates = data.map(item => new Date(item.date));
    // 3. Fungsi untuk generate tanggal baru yang valid
    const generateValidDate = () => {
        const year = 2025;
        const month = Math.floor(Math.random() * 12); // 0-11 (Jan-Dec)
        const maxDay = new Date(year, month + 1, 0).getDate(); // Jumlah hari di bulan tersebut
        const day = Math.floor(Math.random() * maxDay) + 1;
        const newDate = new Date(year, month, day);    
        // 4. Pastikan tanggal tidak ada di existingDates dan tidak lebih baru dari tanggal yang ada
        const isDateValid = !existingDates.some(date => 
          date.getTime() === newDate.getTime()
        ) && newDate < new Date(Math.max(...existingDates.map(d => d.getTime())));  
        return isDateValid ? newDate : generateValidDate(); // Rekursif jika tidak valid
      };
      const validDate = generateValidDate();
      const formattedDate = validDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
      cy.get('[id^="input-"] input.flat-picker-custom-style[placeholder="Pilih tanggal"]').eq(1).click({ force: true });
      cy.get('.dayContainer');
      cy.pause();
  })