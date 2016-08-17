function process_data() {
  header = false;
  sep = "\t";
  f = document.getElementsByName("format");
  if (f[1].checked) {
    sep = ",";
  } else if (f[2].checked) {
    sep = document.getElementsByName("sep")[0].value;
  }
  h = document.getElementsByName("header");
  if (h[0].checked) {
    header = true;
  }
  format_text(sep, header);
}

function format_text(sep,header) {
  text = document.getElementById('data_input');
  line_split = text.value.split("\n");
  field1 = "name";
  field2 = "image";
  field3 = "description";
  start_line = 0;
  if (header == true) {
    start_line = 1;
    header_line = line_split[0].split(sep);
    field1 = header_line[0];
    field2 = header_line[1];
    field3 = header_line[2];
  }
  result = "var inputstream = [{\n";
  for (i = start_line; i < line_split.length -1; i++) {
    col_split = line_split[i].split(sep);
    name = col_split[0];
    image = col_split[1];
    description = col_split[2];
    if (i == line_split.length - 2) {
      result += '    "' + field1 + '": "' + name + '",\n    "' + field2 + '": "' + image + '",\n    "' + field3 + '": "' + description + '"\n'
    } else {
      result += '    "' + field1 + '": "' + name + '",\n    "' + field2 + '": "' + image + '",\n    "' + field3 + '": "' + description + '"\n  }, {\n'
    }
  }
  text.value = result + "}];\n";
}
