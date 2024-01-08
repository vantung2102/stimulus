import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  toggle(e) {
    const $target = $(e.currentTarget);
    const url = $target.data("url");
    const csrfToken = $("[name='csrf-token']").attr("content");

    $.ajax({
      url: url,
      method: "PATCH",
      dataType: "json",
      contentType: "application/json",
      headers: {
        "X-CSRF-Token": csrfToken,
      },
      data: JSON.stringify({ completed: $target.prop("checked") }),
      success: (data) => {
        alert(data.message);
      },
    });
  }
}
