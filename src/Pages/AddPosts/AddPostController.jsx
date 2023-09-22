import { useState } from 'react';
import AddPostView from './AddPostView';
import AddPostModel from './AddPostModel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPostController = () => {
  const navigate = useNavigate();


  // class ornegini olusturma 
  const model = new AddPostModel();

  // state nin varsayilan degerini modelden aldik
  const [form, setForm] = useState(model.state);

  // hangi inputta degisiklik varsa
  // input'un label'ına  göre state'i günceller
  const onInputChange = (label, value) => {
    // state kopyasi
    const copyState = { ...form };

    //objenin dinamik bir sekilde degerlerini degistirme
    copyState[label] = value;

    // state'i güncelle
    setForm(copyState);
  };

  // formun gönderilmesi
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.user || !form.text || !form.title) {
      alert('Lütfen bütün alanları doldurun');
      return;
    }

    axios
      .post('http://localhost:3000/posts', form)
      .then(() => navigate('/'));
  };

  return (
    <AddPostView
      onInputChange={onInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default AddPostController;