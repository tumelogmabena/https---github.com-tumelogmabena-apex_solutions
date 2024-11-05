import React, { useState } from 'react';
import Side_Bar_Business from '../Compontents/Side_Bar_Business';
import Info_Form from '../Compontents/Info_Form';

function Business_Technicians() {
  const sampleData = [
    { id: 1, name: 'Luke Graham', description: 'Hardware' },
    { id: 2, name: 'Bryan Li', description: 'Harware' },
    { id: 3, name: 'Desmond Orange', description: 'Software' },
    { id: 4, name: 'Vincent Van', description: 'Both' },
    { id: 5, name: 'Timothy Good', description: "Both" },
  ];

  const [data] = useState(sampleData);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(sampleData);
  const [selectedId, setSelectedId] = useState(null);

  const handleSearch = () => {
    const result = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(result);
  };

  const handleOpenForm = (id) => {
    setSelectedId(id);
  };

  const handleCloseForm = () => {
    setSelectedId(null);
  };

  return (
    <div>
      <Side_Bar_Business />
      <div className="tupperware">
        <h2>Search Technicians by ID</h2>
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
        <table className="search-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Expertise</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    onClick={() => handleOpenForm(item.id)}
                    className="action-button"
                  >
                    View Details
                  </button>
                  {selectedId === item.id && (
                    <Info_Form onClose={handleCloseForm} data={item} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Business_Technicians;