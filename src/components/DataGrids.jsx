import React, { useState } from 'react';
import "./datagrid.css"


const DataGrids = ({ accountList, search, showRows }) => {

  // Tablo başlıklarına tıkladığımız anda artan ya da azalan bir sıralama yapmak için kullanıyoruz
  const [sortItems, setSortItems] = useState({ key: null, direction: null })

  // Tablomuzdaki verileri sıralama işleminde kullanmak için yeni bir değişkene atadık 
  const sortedData = accountList.filter((account) =>
    (account.name || account.link).toLowerCase().includes(search.toLowerCase())
  );

  // Burada requestSort fonksiyonuna bi key değeri atıyoruz.
  // Daha sonra bu doğrultunun, artan bir sıralama yönünde olduğunu tanımlayarak, buna göre bir koşul ifadesi yazıyoruz.
  // Sıralamak istediğimiz yerdeki elemanın varlığını, bu elemanın geçerli key ile eşleşip eşleşmediğini ve sıralama yönünün artan mı olduğunu kontrol eder.
  // Eğer bütün bu koşul doğru ise ("&&" ifadesi olduğu için hepsi doğru olmazsa false döndürecektir) sıralama doğru olduğunu teyit eder ve dsc olarak değişir.
  // Sonrasında da sıralamamızı güncellemek için setSortItems key ve direction parametrelerine sahip bir nesneyle çağırır. Yeni sıralama uygulanmış olur
  const requestSort = (key) => {
    let direction = 'asc';
    if (
      sortItems &&
      sortItems.key === key &&
      sortItems.direction === 'asc'
    ) {
      direction = 'dsc';
    }
    setSortItems({ key, direction });
  };

  // Burada key değerimiz koşul ifadesi içerisindeki elemen ve elemanın geçerli key ile eşleştiği koşulda sıralamayı artan olarak değiştirerek, başlık yanındaki ok işaretinin yönünü değiştirmekte.
  const getSortIcon = (key) => {
    if (sortItems && sortItems.key === key) {
      return sortItems.direction === 'asc' ? (
        <img className='long-arrow-up' src="assets/Long-arrow-up.png" alt="long-arrow-up icon" />
      ) : (
        <img className='long-arrow-down' src="assets/Long-arrow-down.png" alt="long-arrow-down icon" />
      );
    }
    return null;
  };

  // sortedData dizimizi sıralarken key ve doğrultusuna göre sıralamamızı sağlar. 
  // Eğer a değişkeninin geçerli key değeri, b'den küçük ise, geçerli doğrultusu da artan ise -1, azalan ise 1 döndürecektir.
  // Bu durum, daha küçük değere sahip bir verinin, kendisinden büyük bir değere sahip olandan önce görüneceğini belli eder.
  const sortedAccounts = sortedData.sort((a, b) => {
    if (a[sortItems.key] < b[sortItems.key]) {
      return sortItems.direction === 'asc' ? -1 : 1;
    }
    if (a[sortItems.key] > b[sortItems.key]) {
      return sortItems.direction === 'asc' ? 1 : -1;
    }
    return 0;
  }).slice(0, showRows);

  return (
    <>
      <table className="table-cells">
        <thead className='table-header'>
          <tr>
            <th onClick={() => requestSort('link')}>Sosyal Medya Linki {getSortIcon('link')}</th>
            <th onClick={() => requestSort('name')}>Sosyal Medya Adı {getSortIcon('name')}</th>
            <th onClick={() => requestSort('desc')}>Açıklama {getSortIcon('desc')}</th>
          </tr>
        </thead>
        <tbody className='table-body'>
          {
            sortedAccounts.filter(
              item => search === "" ? item : item.name.toLowerCase().includes(search.toLowerCase())
            ).map(cell => (
              <tr key={cell.id}>
                <td>{cell.link}</td>
                <td>{cell.name}</td>
                <td>{cell.desc}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </>
  )
}

export default DataGrids