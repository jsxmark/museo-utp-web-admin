const BASE_URL = 'http://localhost:8080'
export const API_BASE_URL = BASE_URL.concat('/api');
export const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link'],
    [{ 'align': [] }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'color': [] }],
    ['blockquote'],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
  ];