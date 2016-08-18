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
  input = document.getElementById('data_input');
  placeholder = "%%%%";
  if (/%/.test(sep)) {
    placeholder = "####";
  }
  escape = new RegExp("\\\\" + sep, "g");
  unescape = new RegExp(placeholder, "g");
  text = input.value.replace(escape, placeholder).replace(/\n*$/, "");
  line_split = text.split("\n");
  field_number = 1;
  start_line = 0;
  header_names = [];
  header_line = line_split[0].split(sep);
  if (header == true) {
    start_line = 1;
    clean_varname = /[ ,\!@#\$%\^&\*\(\)\-\+=\|;:'"<>\.\?\/]+/g;
    for (i = 0; i < header_line.length; i++) {
      varname = header_line[i].replace(unescape, sep).replace(clean_varname, "_").replace(/_$/g, "");
      header_names.push(varname);
    }
  } else {
    for (i = 1; i < header_line.length + 1; i++) {
      varname = "field" + i;
      header_names.push(varname);
    }
  }
  result = "var inputstream = [{\n";
  for (i = start_line; i < line_split.length; i++) {
    col_split = line_split[i].split(sep);
    result_line = '    "';
    for (n = 0; n < col_split.length; n++) {
      field_name = header_names[n];
      field_data = col_split[n].replace(unescape, sep);
      line_ending = '",\n    "';
      if (n == col_split.length - 1) {
        line_ending = '"\n  }, {\n';
        if (i == line_split.length - 1) {
          line_ending = '"\n';
        }
      }
      result_line += field_name + '": "' + field_data + line_ending;
    }
    result += result_line;
  }
  input.value = result + "}];\n";
}

function sample_data() {
  text = document.getElementById('data_input');
  header = "name\timage\tdescription\n";
  data = "Dhow\thttps://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Dhow_znz.jpg/300px-Dhow_znz.jpg\tA heavy ship, the traditional deep-sea dhow.\nBoum\thttps://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Sd11-boom.JPG/220px-Sd11-boom.JPG\tA large-sized dhow with a stern that is tapering in shape and a more symmetrical overall structure.\nJahazi\thttps://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Jahazi.jpg/300px-Jahazi.jpg\tA fishing or trading dhow with a broad hull similar to the Jalibut.\nPattamar\thttps://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Boutre_indien.jpg/220px-Boutre_indien.jpg\tA type of Indian dhow.\nSambuk\thttps://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Dhau.jpg/220px-Dhau.jpg\tThe largest type of dhow seen in the Persian Gulf today.\n";

  f = document.getElementsByName("format");
  if (f[1].checked) {
    header = header.replace(/\t/g, ",");
    data = data.replace(/,/g, "\\,").replace(/\t/g, ",");
  } else if (f[2].checked) {
    sep = document.getElementsByName("sep")[0].value;
    header = header.replace(/\t/g, sep);
    data = data.replace(/\t/g, sep);
  }
  h = document.getElementsByName("header");
  if (h[0].checked) {
    text.value = header + data;
  } else {
    text.value = data;
  }
}

function check_other() {
  f = document.getElementsByName("format");
  f[2].checked = true;
}
