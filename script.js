async function loadWishes() {
  const list = document.getElementById("wish-list");
  const count = document.getElementById("wish-count");

  try {
    // File loi-chuc.txt nằm cùng thư mục với index.html.
    const response = await fetch("./loi-chuc.txt", { cache: "no-store" });
    if (!response.ok) throw new Error("Không đọc được file loi-chuc.txt");

    const content = await response.text();
    const wishes = content.split(/\r?\n/).map(line => line.trim()).filter(Boolean);

    list.replaceChildren();

    if (wishes.length === 0) {
      const message = document.createElement("p");
      message.className = "status";
      message.textContent = "Chưa có lời chúc nào. Hãy thêm nội dung vào file loi-chuc.txt nhé!";
      list.appendChild(message);
      count.textContent = "";
      return;
    }

    wishes.forEach((wish, index) => {
      const card = document.createElement("article");
      card.className = "wish-card";
      card.style.animationDelay = `${Math.min(index * 55, 500)}ms`;

      const paragraph = document.createElement("p");
      paragraph.textContent = wish; // Hiển thị dạng văn bản an toàn, không diễn giải HTML.
      card.appendChild(paragraph);
      list.appendChild(card);
    });

    count.textContent = `${wishes.length} LỜI CHÚC ĐƯỢC GỬI TRAO`;
  } catch (error) {
    list.replaceChildren();
    const message = document.createElement("p");
    message.className = "status";
    message.textContent = "Chưa tải được lời chúc. Bạn hãy kiểm tra file loi-chuc.txt đã được đưa lên GitHub cùng thư mục với index.html chưa nhé.";
    list.appendChild(message);
    count.textContent = "";
    console.error(error);
  }
}

loadWishes();
